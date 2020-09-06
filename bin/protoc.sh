#!/bin/bash

protoc --proto_path=../services/auth/pb ../services/auth/pb/*.proto \
     --go_out=plugins=grpc:../services/auth/pb

protoc --proto_path=../services/api-gateway/pb ../services/api-gateway/pb/*.proto \
     --go_out=plugins=grpc:../services/api-gateway/pb