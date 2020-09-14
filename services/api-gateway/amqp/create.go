package amqp

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"time"

	"github.com/cinerama/services/api-gateway/entities"
	"github.com/go-playground/validator"

	"github.com/gin-gonic/gin"

	"github.com/streadway/amqp"

	"github.com/cinerama/services/api-gateway/rabbitmq"
)

type Create struct {
	rabbitmq *rabbitmq.RabbitMQ
}

func NewCreate(rabbitmq *rabbitmq.RabbitMQ) Create {
	return Create{
		rabbitmq: rabbitmq,
	}
}

func (c *Create) HandleLogin(cc *gin.Context) {
	var x entities.LogInRequest

	if err := cc.BindJSON(&x); err != nil {
		fmt.Println(err)

		cc.String(http.StatusBadRequest, "wrong json")
		return
	}

	validate := validator.New()

	err := validate.Struct(x)

	if err != nil {
		cc.String(http.StatusBadRequest, err.Error())
		return
	}

	c.publish(x)

	mockResp := struct {
		Token string `json:"token"`
	}{
		Token: "wdfwrfreferferf",
	}

	cc.JSON(http.StatusOK, mockResp)

}

func (c *Create) publish(message entities.LogInRequest) error {

	ch, err := c.rabbitmq.Channel()
	if err != nil {
		return errors.New("failed to open channel")
	}

	defer ch.Close()

	b, err := json.Marshal(message)

	if err := ch.Confirm(false); err != nil {
		return errors.New("failed to enable confirmation mode")
	}

	err = ch.Publish(
		"",      // exchange
		"login", // routing key
		false,
		false,
		amqp.Publishing{
			// DeliveryMode: amqp.Persistent,
			// MessageId:    "A-UNIQUE-ID",
			ContentType: "text/plain",
			Body:        []byte(b),
		},
	)

	if err != nil {
		return errors.New("failed to publish event")
	}

	select {
	case ntf := <-ch.NotifyPublish(make(chan amqp.Confirmation, 1)):
		if !ntf.Ack {
			return errors.New("failed deliver(publish) event to queue")
		}
	case <-ch.NotifyReturn(make(chan amqp.Return)):
		return errors.New("failed deliver(return) event to queue")

	case <-time.After(c.rabbitmq.ChanNotifyTimeout):
		fmt.Println("event delivery time out")
	}

	return nil

}
