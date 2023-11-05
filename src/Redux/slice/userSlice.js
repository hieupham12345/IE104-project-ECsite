import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullName: '',
  email: '',
  phoneNumber: '',
  access_token: '',
  refresh_token: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { fullName ='', phoneNumber='', email='', access_token='', refresh_token='' } = action.payload
      state.fullName = fullName ? fullName : state.fullName
      state.email = email ? email : state.email
      state.phoneNumber = phoneNumber ? phoneNumber : state.phoneNumber
      state.access_token = access_token ? access_token : state.access_token
      state.refresh_token = refresh_token ? refresh_token : state.refresh_token
    },
    resetUser: (state) => {
      state.fullName = ''
      state.email = ''
      state.phoneNumber = ''
      state.access_token = ''
      state.refresh_token = ''

        },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer