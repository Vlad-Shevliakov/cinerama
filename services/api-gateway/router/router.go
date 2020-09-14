package router

import (
	"fmt"

	"github.com/cinerama/services/api-gateway/amqp"
	"github.com/cinerama/services/api-gateway/rabbitmq"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Router struct {
	gin *gin.Engine
}

func (r *Router) RegisterAllHandlers(rabbitmq *rabbitmq.RabbitMQ) {
	r.registerAuth(rabbitmq)
}

func (r *Router) Run(port string) {
	r.gin.Use(cors.Default())

	if err := r.gin.Run(":" + port); err != nil {
		fmt.Printf("cannot run server on port %v\n", port)
	}

}

func (r *Router) registerAuth(rabbitmq *rabbitmq.RabbitMQ) {
	create := amqp.NewCreate(rabbitmq)

	r.gin.POST("/api/login", create.HandleLogin)

}

func NewRouter() *Router {

	r := gin.Default()
	r.Use(cors.Default())

	return &Router{
		gin: r,
	}

}
