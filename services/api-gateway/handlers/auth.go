package handlers

import (
	"fmt"
	"net/http"

	"github.com/cinerama/services/api-gateway/entities"

	"github.com/gin-gonic/gin"

	"github.com/cinerama/services/api-gateway/rabbitmq"
)

type Auth struct {
	rabbitmq *rabbitmq.RabbitMQ
}

func NewAuth(rabbitmq *rabbitmq.RabbitMQ) Auth {
	return Auth{
		rabbitmq: rabbitmq,
	}
}

func (a *Auth) Login(c *gin.Context) {
	var x entities.LogInRequest

	if err := c.BindJSON(&x); err != nil {
		fmt.Println(err)

		c.String(http.StatusBadRequest, "wrong json")
		return
	}

	err := validate.Struct(x)

	if err != nil {
		c.String(http.StatusBadRequest, err.Error())
		return
	}

	a.rabbitmq.Publish(
		"",      // exchange
		"login", // routing key
		false,   // mandatory
		false,   // immediate
		x,       // what send
	)

	mockResp := struct {
		Token string `json:"token"`
	}{
		Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFyayBXaWxsaWFtc29uIiwiZW1haWwiOiJleGFtcGxlQGdtYWlsLmNvbSIsImpvaW5lZCI6IjEwLjA5LjIwMjAifQ.2obpe107J8f00W_MsLAsqKuMwjFV4es-KziWz9zvp2A",
	}

	c.JSON(http.StatusOK, mockResp)

}
