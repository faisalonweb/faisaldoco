import { createSlice } from '@reduxjs/toolkit'
import { getUserRepoAPI } from 'src/services/UserReposApi/UserRepos'

// Slice
const slice = createSlice({
  name: 'userRepo',
  initialState: {
    userRepos: [] as any,
    
  },
  reducers: {
    userRepoSuccess: (state, action) => {
      state.userRepos = action.payload;
    },
  
  },
});

export default slice.reducer

// Actions

const { userRepoSuccess } = slice.actions

export const userRepo = () => async (dispatch: any) => {
  try {
    const {data} = await getUserRepoAPI()
    dispatch(userRepoSuccess(data));
  } catch (e) {
    return console.error(e);
  }
}
