import { createSlice } from '@reduxjs/toolkit'
import { getUserInfoAPI } from 'src/services/UserInfoApi/UserInfo'

// Slice
const slice = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: {} as any,
    
  },
  reducers: {
    userInfoSuccess: (state, action) => {
      state.userInfo = action.payload;
    },
  
  },
});

export default slice.reducer

// Actions

const { userInfoSuccess } = slice.actions

export const userInfoData = () => async (dispatch: any) => {
  try {
    const {data} = await getUserInfoAPI()
    dispatch(userInfoSuccess(data));
  } catch (e) {
    return console.error(e);
  }
}
