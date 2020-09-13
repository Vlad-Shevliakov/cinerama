package router

import (
	"github.com/cinerama/services/api-gateway/amqp"
	"github.com/cinerama/services/api-gateway/rabbitmq"
	"github.com/gin-gonic/gin"
)

type Router struct {
	gin *gin.Engine
}

func (r *Router) RegisterAllHandlers(rabbitmq *rabbitmq.RabbitMQ) {
	r.registerAuth(rabbitmq)
}

func (r *Router) Run() {
	r.gin.Run(":8000")
}

func (r *Router) registerAuth(rabbitmq *rabbitmq.RabbitMQ) {
	create := amqp.NewCreate(rabbitmq)

	r.gin.POST("/api/login", create.HandleLogin)

}

func NewRouter() *Router {
	return &Router{
		gin: gin.Default(),
	}

}
