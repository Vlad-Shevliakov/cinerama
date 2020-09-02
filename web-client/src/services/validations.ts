import * as yup from 'yup'

export type LoginValuesTypes = {
  email: string
  password: string
}

export const logInSchema = yup.object({
  email: yup.string().email('email').required('required'),
  password: yup.string().min(6, 'min 6').max(20, 'max 20').required('required')
})
