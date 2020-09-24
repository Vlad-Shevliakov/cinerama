package router

import (
	"fmt"

	"github.com/cinerama/services/api-gateway/handlers"

	"github.com/cinerama/services/api-gateway/rabbitmq"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Router struct {
	gin *gin.Engine
}

func (r *Router) RegisterAllHandlers(rabbitmq *rabbitmq.RabbitMQ) {
	r.registerAuthHandlers(rabbitmq)
}

func (r *Router) Run(port string) {
	r.gin.Use(cors.Default())

	if err := r.gin.Run(":" + port); err != nil {
		fmt.Printf("cannot run server on port %v\n", port)
	}

}

func (r *Router) registerAuthHandlers(rabbitmq *rabbitmq.RabbitMQ) {
	auth := handlers.NewAuth(rabbitmq)

	r.gin.POST("/api/login", auth.Login)

}

func NewRouter() *Router {

	r := gin.Default()
	r.Use(cors.Default())

	return &Router{
		gin: r,
	}

}
