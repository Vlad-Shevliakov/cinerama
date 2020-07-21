package main

import (
	proto "github.com/cinerama/services/api-gateway/pb"
	"github.com/cinerama/services/api-gateway/proxy"
	"github.com/joho/godotenv"
	"log"
	"os"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

func main() {

	authAddress, _ := os.LookupEnv("AUTH_PORT")
	gatewayAddress, _ := os.LookupEnv("API_GATEWAY_PORT")

	gw := proxy.CreateGrpcProxy()
	authService := gw.ConnectService(authAddress, proto.RegisterAuthServiceHandler)

	defer func() {
		authService.Close()
	}()

	gw.Run(gatewayAddress)

}
