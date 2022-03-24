import { ReactChildren, ReactChild } from "react";

import AppBar from "src/components/shared/AppBar/AppBar";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="Layout">
      <AppBar />
      {children}
    </div>
  );
};

export default Layout;
