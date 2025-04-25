import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  _id: "",
  firstname: "",
  email: "",
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginRedux: (state, action) => {

      state._id = action?.payload?._id
      state.firstname = action?.payload?.firstname
      state.email = action?.payload?.email


    },
    logoutRedux: (state, action) => {
      state._id = ""
      state.firstname = ""
      state.email = ""

    },
  },
})


export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;