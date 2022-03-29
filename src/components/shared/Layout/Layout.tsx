import { ReactChildren, ReactChild } from "react";
import LeftAppBar from 'src/components/shared/LeftAppBar/LeftAppBar'
import RightAppBar from 'src/components/shared/RightAppBar/RightAppBar'
import AppBar from "src/components/shared/AppBar/AppBar";
import { useAppSelector } from "src/store/hooks";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}
const Layout = ({ children }: LayoutProps) => {
  const { isAuth } = useAppSelector(
    (state) => state.defaultUser
  );
  return (
    <div className="Layout">
      
      <AppBar />
      {
        isAuth ? (
          <LeftAppBar />
        ):
        (
          ''
        )
      }
      {children}
      <RightAppBar />
    </div>
  );
};

export default Layout;
