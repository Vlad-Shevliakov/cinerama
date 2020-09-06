package handlers

import (
	"fmt"
	"github.com/cinerama/services/api-gateway/broker"
	"github.com/streadway/amqp"
	"net/http"

	"github.com/gin-gonic/gin"
)

func LogInHandler(c *gin.Context) {
	fmt.Println("LogInHandler")

	XXX := struct {
		Email string
		Password string
	}{}


	if err := c.BindJSON(&XXX); err != nil {
		fmt.Println("json parse error")
	}

	ch, err := broker.AMQBroker.Conn.Channel()

	if err != nil {
		fmt.Println("cannot create RabbitMQ's channel")
	}

	q, err := ch.QueueDeclare(
		"login", // name
		false,   // durable
		false,   // delete when unused
		false,   // exclusive
		false,   // no-wait
		nil,     // arguments
	)

	if err != nil {
		fmt.Println("cannot declare RabbitMQ's queue")
	}

	err = ch.Publish(
		"",     // exchange
		q.Name, // routing key
		false,  // mandatory
		false,  // immediate
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte(XXX.Email),
		})

	if err != nil {
		fmt.Println("cannot send message")
	}

	c.String(http.StatusOK, "ok")

}
