import { ReactChildren, ReactChild } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import LeftAppBar from 'src/components/shared/LeftAppBar/LeftAppBar'
import RightAppBar from 'src/components/shared/RightAppBar/RightAppBar'
import AppBar from "src/components/shared/AppBar/AppBar";
import {Loader} from "src/components/shared/Loader/loader";
// import { useAppSelector } from "src/store/hooks";
import { useLocation } from "react-router-dom";



interface LayoutProps {
  children: ReactChild | ReactChildren;
}
const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const { isLoading } = useAuth0();
  // const { isAuth } = useAppSelector(
  //   (state) => state.defaultUser
  // );
  return (
    <div className="Layout">
      
      {
        pathname !== '/login' && !isLoading ? (
          <>
          <AppBar />
          </>
        ): <Loader />
      }
      
      <div className="inner-layout">
      {
        pathname !== '/notpagefound' && !isLoading && pathname !== '/login' && pathname !== '/verifyemail' && pathname !== "/onboarding"  &&  pathname !== "/subscribe" && pathname !== "/goodtogo" && pathname !== "/invite" ? (
          <>
          <LeftAppBar />
          <RightAppBar />
          </>
        ):''
      }
      <div className="main-content">
      {children}
      </div> 
      
      </div>
     
    </div>
  );
};

export default Layout;
