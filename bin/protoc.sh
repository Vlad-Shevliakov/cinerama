#!/bin/bash

# protoc -I/usr/local/include -I. \
#   -I$GOPATH/src \
#   -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
#   --go_out=plugins=grpc:. \
#   ../services/api-gateway/pb/api-gateway.proto


# protoc -I/usr/local/include -I. \
#     -I${GOPATH}/pkg \
#     -I=$GOPATH/pkg/mod/github.com/grpc-ecosystem/grpc-gateway@v1.14.6/third_party/googleapis \
#     --go_out=plugins=grpc:. \
#     ../services/api-gateway/pb/api-gateway.proto

    
# protoc -I/usr/local/include -I. \
#     -I${GOPATH}/src \
#     -I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
#     --grpc-gateway_out=logtostderr=true:. \
#     ../services/api-gateway/pb/api-gateway.proto
# protoc -I/usr/local/include -I. \
#     -I${GOPATH}/src \
#     -I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
#     --swagger_out=logtostderr=true:. \
#     ../services/api-gateway/pb/api-gateway.proto


# api-gateway generation
protoc --proto_path=../services/api-gateway/pb ../services/api-gateway/pb/*.proto \
    --go_out=plugins=grpc:../services/api-gateway/pb \
    --grpc-gateway_out=../services/api-gateway/pb