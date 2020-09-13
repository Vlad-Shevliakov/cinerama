package amqp

import (
	"errors"

	"github.com/cinerama/services/api-gateway/rabbitmq"
	"github.com/streadway/amqp"
)

type AMQPConfig struct {
	Create struct {
		ExchangeName string
		ExchangeType string
		RoutingKey   string
		QueueName    string
	}
}

type AMQP struct {
	config   AMQPConfig
	rabbitmq *rabbitmq.RabbitMQ
}

func New(config AMQPConfig, rabbitmq *rabbitmq.RabbitMQ) AMQP {
	return AMQP{
		config:   config,
		rabbitmq: rabbitmq,
	}
}

func (a *AMQP) Setup() error {
	ch, err := a.rabbitmq.Channel()

	if err != nil {
		return errors.New("failed to open channel")
	}

	defer ch.Close()

	if err := a.declareCreate(ch); err != nil {
		return err
	}

	return nil

}

func (a *AMQP) declareCreate(ch *amqp.Channel) error {
	err := ch.ExchangeDeclare(
		a.config.Create.ExchangeName,
		a.config.Create.ExchangeType,
		true,
		false,
		false,
		false,
		nil,
	)

	if err != nil {
		return errors.New("failed to declare exchange")
	}

	_, err = ch.QueueDeclare(
		a.config.Create.QueueName,
		true,
		false,
		false,
		false,
		amqp.Table{
			"x-queue-mode": "lazy",
		},
	)

	if err != nil {
		return errors.New("failed to declare queue")
	}

	err = ch.QueueBind(
		a.config.Create.QueueName,
		a.config.Create.RoutingKey,
		a.config.Create.ExchangeName,
		false,
		nil,
	)

	if err != nil {
		return errors.New("failed to bind queue")
	}

	return nil
}
