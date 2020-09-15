import { createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as actions from '../../actions/user/user'

export type userData = {
  id: string
  name: string
  email: string
  joined: string
}

export interface UserState {
  isLoading: boolean
  userData: userData
}

const initialState: UserState = {
  isLoading: false,
  userData: {
    id: '',
    name: '',
    email: '',
    joined: ''
  }
}

// Type-Safe Reducer
export default createReducer(initialState, (builder) =>
  builder
    .addCase(
      actions.userAuthRequest,
      (state, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload
      }
    )
    .addCase(
      actions.userLogInSuccess,
      (state, action: PayloadAction<userData>) => {
        state.isLoading = false
        state.userData = action.payload
      }
    )
)
