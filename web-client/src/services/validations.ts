import * as yup from 'yup'

export type LoginValuesTypes = {
  email: string
  password: string
}

export type SignUpValuesTypes = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export const logInSchema = {
  email: yup.string().email('email').required('required'),
  password: yup.string().min(6, 'min 6').max(20, 'max 20').required('required')
}

export const signUpSchema = yup.object({
  ...logInSchema,
  name: yup.string().max(20, 'max 20').required('required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'passwords must match')
    .required('required')
})
