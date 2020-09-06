package server

import (
	"fmt"
	"github.com/cinerama/services/api-gateway/broker"
	"log"
	"os"
	"sync"

	"github.com/streadway/amqp"

	"github.com/cinerama/services/api-gateway/handlers"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)


var AMQconn *amqp.Connection

func init() {
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

type server struct {
	wg            sync.WaitGroup
	amqConnection *amqp.Connection
}

func NewServer() *server {
	return &server{}
}

func (s *server) Run() {
	s.wg.Add(1)

	go func() {
		//s.initAQMConnection()
		broker.AMQBroker.InitConnection()
		s.wg.Done()
	}()

	s.wg.Add(1)

	go func() {
		s.initREST()
		s.wg.Done()
	}()

	s.wg.Wait()

	defer func() {
		s.Stop()
	}()
}

func (s *server) Stop() {
	if err := s.amqConnection.Close(); err != nil {
		fmt.Println("fail to close amqp connection")
	}
}

func (s *server) initREST() {

	gatewayAddress, _ := os.LookupEnv("API_GATEWAY_PORT")
	ginMode, _ := os.LookupEnv("GIN_MODE")

	gin.SetMode(ginMode)

	r := gin.Default()

	r.POST("/login", handlers.LogInHandler)

	fmt.Println("running gin:8000...")

	if err := r.Run(":" + gatewayAddress); err != nil {
		fmt.Printf("cannot run server on port %v\n", gatewayAddress)
	}
}

//func (s *server) initAQMConnection() {
//	conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")
//	if err != nil {
//		fmt.Println("cannot connect to RabbitMQ")
//	}
//
//	ch, err := conn.Channel()
//
//	if err != nil {
//		fmt.Println("cannot create RabbitMQ's channel")
//	}
//
//	q, err := ch.QueueDeclare(
//		"login", // name
//		false,   // durable
//		false,   // delete when unused
//		false,   // exclusive
//		false,   // no-wait
//		nil,     // arguments
//	)
//
//	if err != nil {
//		fmt.Println("cannot declare RabbitMQ's queue")
//	}
//
//	body := "Hello RabbitMQ from Golang!"
//	err = ch.Publish(
//		"",     // exchange
//		q.Name, // routing key
//		false,  // mandatory
//		false,  // immediate
//		amqp.Publishing{
//			ContentType: "text/plain",
//			Body:        []byte(body),
//		})
//
//	if err != nil {
//		fmt.Println("cannot send message")
//	}
//
//	s.amqConnection = conn
//
//	fmt.Println("running amqp:5672...")
//
//}
