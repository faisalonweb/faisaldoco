import React,{ useEffect } from 'react';
import LoginView from 'src/views/LoginView/LoginView'
import SignUpView from 'src/views/SignUpView/SignUpView'
import ReviewView from 'src/views/ReviewView/ReviewView'
import HomeView from 'src/components/common/Smart/Home/Home'
import { Routes, Route } from 'react-router-dom'
import './App.scss';
import 'src/styles/components.scss'
import 'src/styles/theme/light.scss'
import 'src/styles/theme/dark.scss'
import { useAppSelector } from "src/store/hooks";
import Layout from 'src/components/shared/Layout/Layout'
import PrivateRoute from "src/PrivateRoute";

function App() {
  let result = JSON.parse(localStorage.getItem('test') || '{}')
  const { theme } = useAppSelector(
    (state) => state.myTheme
  );
  // const { isLoggedin } = useAppSelector(
  //   (state) => state.defaultUser
  // );
  useEffect(() => {
    if (theme === 'light-theme') {
      document.body.classList.add('light-theme');
    }
    else {
      document.body.classList.add('dark-theme');
    }
  });
  return (
    <div className="App">
      
      <Layout>
       <Routes>
       <Route path="/" element={<LoginView />} />
       <Route path="/signup" element={<SignUpView />} />
       <Route element={<PrivateRoute isLogged={result.myBool} />}>
       <Route path="/review" element={<ReviewView />} />
       <Route path="/home" element={<HomeView />} />
        </Route>
        <Route path="*" element={<LoginView />} />
       </Routes>
      </Layout>
    
    </div>
  );
}

export default App;
