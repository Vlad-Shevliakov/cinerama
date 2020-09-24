package rabbitmq

import (
	"encoding/json"
	"errors"
	"fmt"
	"sync"
	"time"

	"github.com/streadway/amqp"
)

type RabbitMQ struct {
	mux               sync.RWMutex
	config            Config
	dialConfig        amqp.Config
	connection        *amqp.Connection
	ChanNotifyTimeout time.Duration
}

func (r *RabbitMQ) Connect() error {

	// "amqp://guest:guest@localhost:5672/"
	url := fmt.Sprintf("%s://%s:%s@%s:%s/", r.config.Schema, r.config.Username, r.config.Password, r.config.Host, r.config.Port)

	conn, err := amqp.DialConfig(url, r.dialConfig)

	if err != nil {
		fmt.Println("cannot connect to RabbitMQ")
		return err
	}

	r.connection = conn

	return nil
}

func (r *RabbitMQ) Channel() (*amqp.Channel, error) {
	if r.connection == nil {
		fmt.Println("establish rabbitmq connection first")

		if err := r.Connect(); err != nil {
			return nil, errors.New("cannot connect to RabbitMQ")
		}
	}

	ch, err := r.connection.Channel()

	if err != nil {
		return nil, err
	}

	return ch, nil

}

func (r *RabbitMQ) Publish(
	exchange string,
	routingKey string,
	mandatory bool,
	immediate bool,
	message interface{},
) error {

	ch, err := r.Channel()
	if err != nil {
		return errors.New("failed to open channel")
	}

	defer ch.Close()

	b, err := json.Marshal(message)

	if err := ch.Confirm(false); err != nil {
		return errors.New("failed to enable confirmation mode")
	}

	err = ch.Publish(
		exchange,
		routingKey,
		mandatory,
		immediate,
		amqp.Publishing{
			// DeliveryMode: amqp.Persistent,
			// MessageId:    "A-UNIQUE-ID",
			ContentType: "text/plain",
			Body:        []byte(b),
		},
	)

	if err != nil {
		return errors.New("failed to publish event")
	}

	select {
	case ntf := <-ch.NotifyPublish(make(chan amqp.Confirmation, 1)):
		if !ntf.Ack {
			return errors.New("failed deliver(publish) event to queue")
		}
	case <-ch.NotifyReturn(make(chan amqp.Return)):
		return errors.New("failed deliver(return) event to queue")

	case <-time.After(r.ChanNotifyTimeout):
		fmt.Println("event delivery time out")
	}

	return nil
}

func (r *RabbitMQ) Shutdown() error {
	if r.connection != nil {
		return r.connection.Close()
	}

	return nil
}
