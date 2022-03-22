import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  useremail: 'default@gmail.com',
  userpassword: 'default12',
  isLoggedin: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
        state.useremail = action.payload;
      },
    setUserPassword: (state, action) => {
        state.userpassword = action.payload;
      },
    setLoggedInStatus: (state) => {
        state.isLoggedin = true;
      },
    unsetLoggedInStatus: (state) => {
        state.isLoggedin = false;
      },  
  },
});

export const {
  setUserEmail,
  setUserPassword,
  setLoggedInStatus,
  unsetLoggedInStatus
} = userSlice.actions;
export default userSlice.reducer;
