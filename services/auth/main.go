package main

import (
	"fmt"
	"log"
	"unsafe"

	"github.com/streadway/amqp"
)

func main() {
	conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")

	if err != nil {
		fmt.Println("Failed to connect to RabbitMQ")
	}

	defer conn.Close()

	ch, err := conn.Channel()

	if err != nil {
		fmt.Println("Failed to open a channel")
	}

	defer ch.Close()

	if err != nil {
		fmt.Println("Failed to declare a queue")
	}

	msgs, err := ch.Consume(
		"login", // queue
		"",      // consumer
		true,    // auto-ack
		false,   // exclusive
		false,   // no-local
		false,   // no-wait
		nil,     // args
	)

	if err != nil {
		fmt.Println("Failed to register a consumer")
	}

	mqc := make(chan bool)

	go func() {
		for d := range msgs {
			log.Printf("Received a message: %s; %d bytes", d.Body, unsafe.Sizeof(d.Body))
		}
	}()

	log.Printf("Waiting for messages.")
	<-mqc
}
