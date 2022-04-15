import { ReactChildren, ReactChild } from "react";
import LeftAppBar from 'src/components/shared/LeftAppBar/LeftAppBar'
import RightAppBar from 'src/components/shared/RightAppBar/RightAppBar'
import AppBar from "src/components/shared/AppBar/AppBar";
import { useAppSelector } from "src/store/hooks";
import { useLocation } from "react-router-dom";



interface LayoutProps {
  children: ReactChild | ReactChildren;
}
const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const { isAuth } = useAppSelector(
    (state) => state.defaultUser
  );
  return (
    <div className="Layout">
      
      <AppBar />
      <div className="inner-layout">
      {
        isAuth && pathname !== '/notpagefound' ? (
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
