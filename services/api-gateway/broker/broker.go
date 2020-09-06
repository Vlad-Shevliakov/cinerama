package broker

import (
	"fmt"
	"github.com/streadway/amqp"
)


type amqBroker struct {
	Conn *amqp.Connection
}

var AMQBroker amqBroker

func (a *amqBroker) InitConnection() {
	conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")
	if err != nil {
		fmt.Println("cannot connect to RabbitMQ")
	}

	//ch, err := conn.Channel()
	//
	//if err != nil {
	//	fmt.Println("cannot create RabbitMQ's channel")
	//}
	//
	//q, err := ch.QueueDeclare(
	//	"login", // name
	//	false,   // durable
	//	false,   // delete when unused
	//	false,   // exclusive
	//	false,   // no-wait
	//	nil,     // arguments
	//)
	//
	//if err != nil {
	//	fmt.Println("cannot declare RabbitMQ's queue")
	//}
	//
	//body := "Hello RabbitMQ from Golang!"
	//err = ch.Publish(
	//	"",     // exchange
	//	q.Name, // routing key
	//	false,  // mandatory
	//	false,  // immediate
	//	amqp.Publishing{
	//		ContentType: "text/plain",
	//		Body:        []byte(body),
	//	})
	//
	//if err != nil {
	//	fmt.Println("cannot send message")
	//}

	a.Conn = conn

	fmt.Println("running amqp:5672...")

}

