package main

import (
	"context"
	"fmt"
	proto "github.com/cinerama/services/auth/pb"
	"github.com/joho/godotenv"
	"google.golang.org/grpc"
	"log"
	"net"
	"os"
)


func init() {
	// loads values from .env into the system
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}


type Server struct {}

func (s *Server) SignUp(ctx context.Context, r *proto.SignUpRequest) (*proto.SignUpResponse, error) {

	fmt.Println(r.Name)
	fmt.Println("Call SignUp")

	return &proto.SignUpResponse{}, nil

}

func main() {

	authPort, _ := os.LookupEnv("AUTH_PORT")



	lis, err := net.Listen("tcp", "localhost:" + authPort)

	if err != nil {
		fmt.Println("cannot connect to TCP port")
	}


	gServer := grpc.NewServer()
	proto.RegisterAuthServiceServer(gServer, &Server{})


	gServer.Serve(lis)


}
