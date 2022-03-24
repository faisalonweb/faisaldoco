import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ReviewView from 'src/views/ReviewView/ReviewView'
import HomeView from 'src/components/common/Smart/Home/Home'

const PrivateRoute = () => {
  return (
    <>
      <Routes>
      <Route path="/review" element={<ReviewView />} />
       <Route path="/home" element={<HomeView />} />
       </Routes> 
    </>   
  );
};

export default PrivateRoute;