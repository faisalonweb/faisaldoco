import { createSlice } from '@reduxjs/toolkit'
import { getUserTokenAPI } from 'src/services/UserTokenApi/UserTokenApi'

// Slice
const slice = createSlice({
  name: 'userToken',
  initialState: {
    userAccessToken: '',
    userAuthCode: ''
  },
  reducers: {
    userTokenSuccess: (state, action) => {
      state.userAccessToken = action.payload;
    },
    userAuthCode: (state, action) => {
        state.userAuthCode = action.payload;
      },
  },
});
export default slice.reducer

// Actions
const { userTokenSuccess, userAuthCode } = slice.actions

export const userToken = () => async (dispatch: any) => {
  try {
    const {data} = await getUserTokenAPI();
    let access_token = data.split('&')[0].split('=')[1];
    if (access_token !== 'bad_verification_code') {
        localStorage.setItem("access_token", access_token)
        dispatch(userTokenSuccess(access_token));
    }
  } catch (e) {
    return console.error(e);
  }
}
export const userCode = (code: string) => async (dispatch: any) => {
    dispatch(userAuthCode(code))
  }
