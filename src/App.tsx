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
import LoggedRestrictedRouter from 'src/components/hoc/LoggedRestrictedRouter';
import NotFoundPage from 'src/components/shared/NotFoundPage/NotFoundPage'

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
       <Route path="*"  element={<LoggedRestrictedRouter component={PrivateRoute}/>}/>
       </Routes>
      </Layout>
    </div>
  );
}

export default App;
