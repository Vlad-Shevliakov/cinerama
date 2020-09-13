package main

import (
	"log"

	"github.com/cinerama/services/api-gateway/router"

	"github.com/cinerama/services/api-gateway/amqp"
	"github.com/cinerama/services/api-gateway/config"
	"github.com/cinerama/services/api-gateway/rabbitmq"
)

func main() {

	cfg := config.New()

	rabbitMq := rabbitmq.NewConfig(cfg.RabbitMQ)

	if err := rabbitMq.Connect(); err != nil {
		log.Fatal(err)
	}

	defer rabbitMq.Shutdown()

	gatewayAMQP := amqp.New(cfg.AMQP, rabbitMq)

	if err := gatewayAMQP.Setup(); err != nil {
		log.Fatal(err)
	}

	r := router.NewRouter()
	r.RegisterAllHandlers(rabbitMq)
	r.Run()

}
