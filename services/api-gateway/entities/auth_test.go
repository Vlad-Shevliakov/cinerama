package entities

import (
	"testing"

	"github.com/go-playground/validator"
)

func TestRightLogInRequest(t *testing.T) {

	request := &LogInRequest{
		Email:    "example@gmail.com",
		Password: "jH_d62fs",
	}

	validate := validator.New()

	err := validate.Struct(request)

	if err != nil {
		t.Fatal(err)
	}

}

func TestWrongLogInRequest(t *testing.T) {
	request := &LogInRequest{
		Email:    "",
		Password: "123",
	}

	validate := validator.New()

	err := validate.Struct(request)

	if err == nil {
		t.Fatal(err)
	}
}
