import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  useremail: 'default12@gmail.com',
  userpassword: 'defaultuser'
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
  },
});

export const {
  setUserEmail,
  setUserPassword,
} = userSlice.actions;
export default userSlice.reducer;
