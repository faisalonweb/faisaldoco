import { createSlice } from '@reduxjs/toolkit'
import { LoginAPI } from 'src/services/LoginApi/LoginApi'

// Slice
let storeMe = {
  myBool: true
}
const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload))
      localStorage.setItem('test', JSON.stringify(storeMe))
    },
  },
});

export default slice.reducer

// Actions

const { loginSuccess } = slice.actions

export const login = ( email:string, password:string) => (dispatch: any) => {
  
  try {
    LoginAPI(email, password)
    dispatch(loginSuccess({email,password}));
  } catch (e) {
    return console.error("error error");
  }
}

