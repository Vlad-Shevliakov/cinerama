package server

import (
	"fmt"
	"log"
	"os"
	"sync"

	"github.com/cinerama/services/api-gateway/broker"
	"github.com/gin-contrib/cors"

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
	r.Use(cors.Default())

	r.POST("/api/login", handlers.LogInHandler)

	fmt.Println("running gin:8000...")

	if err := r.Run(":" + gatewayAddress); err != nil {
		fmt.Printf("cannot run server on port %v\n", gatewayAddress)
	}
}
