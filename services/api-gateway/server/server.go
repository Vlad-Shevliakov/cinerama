package server

import (
	"context"
	"fmt"
	proto "github.com/cinerama/services/api-gateway/pb"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"google.golang.org/grpc"
	"log"
	"net"
	"net/http"
	"sync"
)

type APIGatewayService struct{
	wg sync.WaitGroup
}

func CreateNew() *APIGatewayService {
	return &APIGatewayService{}
}

func (g *APIGatewayService) Run() {
	g.wg.Add(1)

	go func() {
		log.Fatal(g.runGRPC())
		g.wg.Done()
	}()

	g.wg.Add(1)

	go func() {
		log.Fatal(g.runREST())
		g.wg.Done()
	}()

	g.wg.Wait()
}

func (g *APIGatewayService) runGRPC() error {
	tcpListener, err := net.Listen("tcp", "localhost:8000")

	if err != nil {
		return  err
	}

	gServer := grpc.NewServer()

	proto.RegisterAPIGatewayServiceServer(gServer, g)
	gServer.Serve(tcpListener)

	return nil



}

func (g *APIGatewayService) runREST() error {
	ctx := context.Background()

	ctx, cancel := context.WithCancel(ctx)

	defer cancel()

	mux := runtime.NewServeMux()

	options := []grpc.DialOption{
		grpc.WithInsecure(),
	}

	err := proto.RegisterAPIGatewayServiceHandlerFromEndpoint(ctx, mux, ":8000", options)

	if err != nil {
		return err
	}

	return http.ListenAndServe(":8080", mux)

}


func (g *APIGatewayService) HandShake(ctx context.Context, r *proto.PingRequest) (*proto.PongResponse, error) {


	fmt.Println("call: HandShake")
	return &proto.PongResponse{
		Message: fmt.Sprintf("Hello: %v!", r.Name),
	}, nil
}

