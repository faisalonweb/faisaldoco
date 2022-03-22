import React,{ useEffect } from 'react';
import LoginView from 'src/views/LoginView/LoginView'
import SignUpView from 'src/views/SignUpView/SignUpView'
import ReviewView from 'src/views/ReviewView/ReviewView'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.scss';
import 'src/styles/components.scss'
import 'src/styles/theme/light.scss'
import 'src/styles/theme/dark.scss'
import { useAppSelector } from "src/store/hooks";

function App() {
  const { theme } = useAppSelector(
    (state) => state.myTheme
  );
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
     <Router>
       <Routes>
       <Route path="/" element={<LoginView />} />
       <Route path="/signup" element={<SignUpView />} />
       <Route path="/review" element={<ReviewView />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
