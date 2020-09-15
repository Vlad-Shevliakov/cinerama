import api from './axiosClient'
import { LoginValuesTypes } from '../services/validations'

export const logInRequest = (values: LoginValuesTypes) => {
  return api.post(`/login`, values)
}
