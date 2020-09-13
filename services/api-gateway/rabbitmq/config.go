package rabbitmq

import (
	"time"

	"github.com/streadway/amqp"
)

type Config struct {
	Schema               string
	Username             string
	Password             string
	Host                 string
	Port                 string
	Vhost                string
	ConnectionName       string
	ChannelNotifyTimeout time.Duration
	Reconnect            struct {
		Interval   time.Duration
		MaxAttempt int
	}
}

func NewConfig(config Config) *RabbitMQ {
	return &RabbitMQ{
		config:            config,
		dialConfig:        amqp.Config{Properties: amqp.Table{"connection_name": config.ConnectionName}},
		ChanNotifyTimeout: config.ChannelNotifyTimeout,
	}
}
