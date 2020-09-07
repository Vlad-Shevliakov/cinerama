import api from './axiosClient'
import { LoginValuesTypes } from '../services/validations'

export const signUp = (values: LoginValuesTypes) => {
  return api.post(`/login`, values)
}
