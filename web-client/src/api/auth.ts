import api from './axiosClient'

export const signUp = (email: string) => {
  return api.get(`/hello/${email}`)
}
