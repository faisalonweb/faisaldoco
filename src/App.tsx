import React,{ useEffect } from 'react';
import LoginView from 'src/views/LoginView/LoginView'
import SignUpView from 'src/views/SignUpView/SignUpView'
import InviteView from 'src/views/InviteView/InviteView'
import OnBoardView from 'src/views/OnBoardView/OnBoardView'
import SubscribeView from 'src/views/SubscribeView/SubscribeView'
import GoodToGoView from 'src/views/GoodToGoView/GoodToGoView'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.scss';
import 'src/styles/components.scss'
import 'src/styles/theme/light.scss'
import 'src/styles/theme/dark.scss'
import { useAppSelector } from "src/store/hooks";
import Layout from 'src/components/shared/Layout/Layout'
import PrivateRoute from "src/routes/PrivateRoute";
import LoggedRestrictedRouter from 'src/components/hoc/LoggedRestrictedRouter'
import { ProtectedRoute } from "src/components/hoc/LoginRestrictedRouter";
import NotFoundPage from 'src/components/shared/NotFoundPage/NotFoundPage'
import ReviewView from 'src/views/ReviewView/ReviewView'
import OrgConnections from 'src/components/common/Smart/OrgConnection/OrgConnection'
import OrgMembers from 'src/components/common/Smart/OrgMembers/OrgMembers'
import OrgBilling from 'src/components/common/Smart/OrgBilling/OrgBilling'
import UserProjects from 'src/components/common/Smart/UserProjects/UserProjects'
import UserIntegration from 'src/components/common/Smart/UserIntegration/UserIntegration'
import UserInfo from 'src/components/common/Presentational/UserInfo/UserInfo'
import UserOrgs from 'src/components/common/Smart/UserOrgs/UserOrgs'


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
      <Layout>
       <Routes>
       <Route path="/" element={<Navigate to="/login" />} />
       <Route path="/login" element={<LoginView />} />
       <Route path="/signup" element={<SignUpView />} />
       <Route path="/onboarding" element={<OnBoardView />} />
       <Route path="/invite" element={<InviteView/>}/>
       <Route path="/subscribe" element={<SubscribeView/>}/>
       <Route path="/goodtogo" element={<GoodToGoView/>}/>
       <Route path="/notpagefound" element={<NotFoundPage />} />
       {/* <Route path="*"  element={<LoggedRestrictedRouter component={PrivateRoute}/>}/> */}
       <Route path="/review" element={<ReviewView/>} />
       <Route path="/user" element={<Navigate to="/user/info" />}/>
       <Route path="/user/info" element={<ProtectedRoute component={UserInfo}/>} />
       <Route path="/user/projects" element={<UserProjects />} />
       <Route path="/user/integrations" element={<UserIntegration />} />
       <Route path="/user/orgs" element={<UserOrgs />} />
       <Route path="/org" element={<Navigate to="/org/connections" />} />
       <Route path="/org/connections" element={<OrgConnections />} />
       <Route path="/org/members" element={<OrgMembers />} />
       <Route path="/org/billing" element={<OrgBilling />} />
       <Route path="*" element={<Navigate to="/notpagefound" replace />} />
       </Routes>
      </Layout>
    </div>
  );
}

export default App;
