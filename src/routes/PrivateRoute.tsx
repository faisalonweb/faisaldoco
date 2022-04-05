import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import ReviewView from 'src/views/ReviewView/ReviewView'
import HomeView from 'src/components/common/Smart/Home/Home'
import UserView from 'src/views/UserView/UserView'
import OrgConnections from 'src/components/common/Smart/OrgConnection/OrgConnection'
import OrgMembers from 'src/components/common/Smart/OrgMembers/OrgMembers'
import OrgBilling from 'src/components/common/Smart/OrgBilling/OrgBilling'

const PrivateRoute = () => {
  return (
    <>
      <Routes>
      <Route path="/review" element={<ReviewView />} />
       <Route path="/home" element={<HomeView />} />
       <Route path="/user" element={<UserView />} />
       <Route path="/org" element={<Navigate to="/org/connections" />} />
       <Route path="/org/connections" element={<OrgConnections />} />
       <Route path="/org/members" element={<OrgMembers />} />
       <Route path="/org/billing" element={<OrgBilling />} />
       </Routes> 
    </>   
  );
};

export default PrivateRoute;