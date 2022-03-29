import { createSlice } from '@reduxjs/toolkit'
import { LoginAPI } from 'src/services/LoginApi/LoginApi'

// Slice
let storeMe = {
  myBool: true
}
let loggedUser = localStorage.getItem('user');
const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuth: loggedUser ? true: false
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      localStorage.setItem('user', JSON.stringify(action.payload))
      localStorage.setItem('test', JSON.stringify(storeMe))
    },
    logoutSuccess: (state) =>  {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem('user')
      localStorage.removeItem('test')
    },
  },
});

export default slice.reducer

// Actions

const { loginSuccess,logoutSuccess  } = slice.actions

export const login = ( email:string, password:string) => async (dispatch: any) => {
  
  try {
   await LoginAPI(email, password)
    dispatch(loginSuccess({email,password}));
  } catch (e) {
    return console.error(e);
  }
}
export const logout = () => async (dispatch: any) => {
   dispatch(logoutSuccess())
}

