import React from 'react';
import LoginView from 'src/views/LoginView/LoginView'
import SignUpView from 'src/views/SignUpView/SignUpView'
import HomeView from 'src/views/HomeView/HomeView'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
       <Route path="/" element={<LoginView />} />
       <Route path="/signup" element={<SignUpView />} />
       <Route path="/home" element={<HomeView />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
