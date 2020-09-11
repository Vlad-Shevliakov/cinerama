package broker

import (
	"time"
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

func New(config Config) *RabbitMQ {
	return &RabbitMQ{
		config: config,
		// dialConfig:           amqp.Config{Properties: amqp.Table{"connection_name": config.ConnectionName}},
		ChannelNotifyTimeout: config.ChannelNotifyTimeout,
	}
}
