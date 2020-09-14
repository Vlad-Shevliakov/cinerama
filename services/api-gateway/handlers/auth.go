package handlers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func LogInHandler(c *gin.Context) {
	fmt.Println("LogInHandler")

	c.String(http.StatusOK, "ok")

}
