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
    isAuth: loggedUser ? true: false,
    projects: [
      {
      id: "1",
      project_title: "Project 1",
      hosted: 'link1',
      last_publish: '2-2-22'
      },
      {
        id: "2",
        project_title: "Project 2",
        hosted: 'link2',
        last_publish: '2-2-22'
      },
      {
        id: "3",
        project_title: "Project 3",
        hosted: 'link3',
        last_publish: '2-2-22'
      },
],
integration: [
  {
  id: "1",
  provider_name: 'name1',
  provider_link: 'provider link'
  },
  {
    id: "2",
    provider_name: 'nam2',
    provider_link: 'provider link'
   
  },
  {
    id: "3",
    provider_name: 'nam3',
    provider_link: 'provider link'
    
  },
  {
    id: "4",
    provider_name: 'nam4',
    provider_link: 'provider link'
    
  },
  {
    id: "5",
    provider_name: 'nam5',
    provider_link: 'provider link'
   
  },
]
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

