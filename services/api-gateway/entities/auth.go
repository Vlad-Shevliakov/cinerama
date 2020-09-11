package entities

type LogInRequest struct {
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required,min=6,max=20"`
}

type SignUpRequest struct {
	Email        string `json:"email" validate:"required"`
	Name         string `json:"name" validate:"required,min=1,max=20"`
	Password     string `json:"password" validate:"required,min=6,max=20"`
	CreationDate string `json:"creationDate" validate:"required"`
}
