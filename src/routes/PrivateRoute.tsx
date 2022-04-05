import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import ReviewView from 'src/views/ReviewView/ReviewView'
import HomeView from 'src/components/common/Smart/Home/Home'
import OrgConnections from 'src/components/common/Smart/OrgConnection/OrgConnection'
import OrgMembers from 'src/components/common/Smart/OrgMembers/OrgMembers'
import OrgBilling from 'src/components/common/Smart/OrgBilling/OrgBilling'
import UserProjects from 'src/components/common/Smart/UserProjects/UserProjects'
import UserIntegration from 'src/components/common/Smart/UserIntegration/UserIntegration'
import UserInfo from 'src/components/common/Presentational/UserInfo/UserInfo'
import UserOrgs from 'src/components/common/Smart/UserOrgs/UserOrgs'
import NotFoundPage from 'src/components/shared/NotFoundPage/NotFoundPage'

const PrivateRoute = () => {
  return (
    <>
      <Routes>
      <Route path="/review" element={<ReviewView />} />
       <Route path="/home" element={<HomeView />} />
       <Route path="/user" element={<Navigate to="/user/info" />}/>
       <Route path="/user/info" element={<UserInfo />} />
       <Route path="/user/projects" element={<UserProjects />} />
       <Route path="/user/integration" element={<UserIntegration />} />
       <Route path="/user/orgs" element={<UserOrgs />} />
       <Route path="/org" element={<Navigate to="/org/connections" />} />
       <Route path="/org/connections" element={<OrgConnections />} />
       <Route path="/org/members" element={<OrgMembers />} />
       <Route path="/org/billing" element={<OrgBilling />} />
       <Route path="*" element={<Navigate to="/notpagefound" replace />} />
       <Route path="/notpagefound" element={<NotFoundPage />} />
       </Routes> 
    </>   
  );
};

export default PrivateRoute;