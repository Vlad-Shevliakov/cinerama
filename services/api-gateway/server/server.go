package server

import (
	"sync"

	"github.com/streadway/amqp"
)

type server struct {
	wg            sync.WaitGroup
	amqConnection *amqp.Connection
}

func (s *server) Run() {
	s.wg.Add(1)

	go func() {
		s.wg.Done()
	}()

	s.wg.Add(1)

	go func() {
		// second task
	}()

	s.wg.Wait()

	defer func() {
		// close stuff
	}()
}
