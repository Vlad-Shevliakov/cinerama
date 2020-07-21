package proxy

import (
	"context"
	"fmt"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"google.golang.org/grpc"
	"log"
	"net/http"
	"sync"
)

type GrpcProxy struct {
	Mux *runtime.ServeMux
	wg  sync.WaitGroup
}

func CreateGrpcProxy() *GrpcProxy {
	return &GrpcProxy{
		Mux: runtime.NewServeMux(),
	}
}

func (g *GrpcProxy) Run(port string) {

	mux := http.NewServeMux()

	mux.Handle("/api/", g.Mux)

	fmt.Printf("Api-Gateway started on port: %v\n", port)
	log.Fatal(http.ListenAndServe(":"+port, mux))

}

func (g *GrpcProxy) ConnectService(serviceAddress string, serviceHandler func(ctx context.Context, mux *runtime.ServeMux, conn *grpc.ClientConn) error) *grpc.ClientConn {

	grpcConn, err := grpc.Dial(
		":"+serviceAddress,
		grpc.WithInsecure(),
	)

	if err != nil {
		fmt.Printf("fail to connect to %s", serviceAddress)
	}

	err = serviceHandler(
		context.Background(),
		g.Mux,
		grpcConn,
	)

	if err != nil {
		fmt.Println("cannot start server")
	}

	return grpcConn

}
