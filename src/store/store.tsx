import { configureStore } from "@reduxjs/toolkit";
import userReducer from 'src/store/reducers/userSlice';
import themeReducer from 'src/store/reducers/themeSlice'
import dataReducer from 'src/store/reducers/dataSlice'
import userInfoReducer from 'src/store/reducers/userInfo'
import userReposReducer from 'src/store/reducers/userRepos'

export const store = configureStore({
    reducer: {
        defaultUser: userReducer,
        myTheme: themeReducer,
        appData: dataReducer,
        userInfo: userInfoReducer,
        userRepos: userReposReducer
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;