package main

import (
	"github.com/cinerama/services/api-gateway/server"
)

func main() {
	s := server.NewServer()

	s.Run()
}
