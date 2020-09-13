package config

import (
	"log"
	"os"
	"time"

	"github.com/cinerama/services/api-gateway/amqp"
	"github.com/cinerama/services/api-gateway/rabbitmq"
	"github.com/joho/godotenv"
)

type Config struct {
	RESTPort string
	RabbitMQ rabbitmq.Config
	AMQP     amqp.AMQPConfig
}

func init() {
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

func New() Config {

	gatewayAddress, _ := os.LookupEnv("API_GATEWAY_PORT")
	rabbitmqPort, _ := os.LookupEnv("RABBITQM_PORT")

	cfg := Config{
		RESTPort: gatewayAddress,
		RabbitMQ: rabbitmq.Config{
			Schema:               "amqp",
			Username:             "guest",
			Password:             "guest",
			Host:                 "localhost",
			Port:                 rabbitmqPort,
			ChannelNotifyTimeout: 250 * time.Millisecond,
			// Reconnect: {}
			// Vhost: "0_o"
		},
	}

	cfg.AMQP.Create.ExchangeName = "user"
	cfg.AMQP.Create.ExchangeType = "direct"
	cfg.AMQP.Create.RoutingKey = "create"
	cfg.AMQP.Create.RoutingKey = "user_create"

	return cfg
}
