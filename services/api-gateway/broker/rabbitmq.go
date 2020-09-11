package broker

import (
	"errors"
	"fmt"
	"sync"
	"time"

	"github.com/streadway/amqp"
)

type RabbitMQ struct {
	mux                  sync.RWMutex
	config               Config
	dialConfig           amqp.Config
	connection           *amqp.Connection
	ChannelNotifyTimeout time.Duration
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
		fmt.Println("establish connection first with rabbitmq")

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

func (r *RabbitMQ) Shutdown() error {
	if r.connection != nil {
		return r.connection.Close()
	}

	return nil
}
