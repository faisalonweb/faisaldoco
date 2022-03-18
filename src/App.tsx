import React from 'react';
import LoginView from 'src/views/LoginView/LoginView'
import SignUpView from 'src/views/SignUpView/SignUpView'
import ReviewView from 'src/views/ReviewView/ReviewView'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.scss';

function App() {
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
