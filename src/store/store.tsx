import { configureStore } from "@reduxjs/toolkit";
import userReducer from 'src/store/reducers/userSlice';
import themeReducer from 'src/store/reducers/themeSlice'

export const store = configureStore({
    reducer: {
        defaultuser: userReducer,
        myTheme: themeReducer
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;