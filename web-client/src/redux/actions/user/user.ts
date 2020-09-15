import { createAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import history from '../../../utils/history'
import routes from '../../../services/routes'
import { logInRequest } from '../../../api/auth'
import { LoginValuesTypes } from '../../../services/validations'
import { userData } from '../../reducers/user/user'

export const userAuthRequest = createAction<boolean>('user/login-request')
export const userLogInSuccess = createAction<userData>('user/login-success')
export const userLogInFailed = createAction<boolean>('user/login-failed')

export const logIn = (values: LoginValuesTypes) => async (dispatch: any) => {
  dispatch(userAuthRequest(true))
  try {
    const res = await logInRequest(values)

    dispatch(
      userLogInSuccess({
        id: '7hdz51d',
        name: 'Sj',
        email: 'sijay@g.com',
        joined: '9/15/2020'
      })
    )
    console.log(res)
    history.replace(routes.panel)
  } catch (error) {
    toast.error(`😕 ${error.message}`)
    console.dir(error)
  }
}

export const signUp = (data: any) => async (dispatch: any) => {
  console.log('signUp request')
}
