import React from 'react';
import ReviewSideBar from 'src/components/common/Smart/ReviewSideBar/ReviewSideBar'
import OrgSideBar from 'src/components/common/Presentational/OrgSideBar/OrgSideBar'
import { useLocation } from "react-router-dom";

const LeftAppBar = () => {
    const { pathname } = useLocation();

    const renderSelectedTab = () => {
        switch (pathname) {
          case "/review":
            return <ReviewSideBar />;
          case "/org/connections":
            return <OrgSideBar />;  
          case "/org/members":
              return <OrgSideBar />;
          case "/org/billing":
                return <OrgSideBar />;       
          default:
            return  <ReviewSideBar />   
        }
      };
    return (
        <div className="review-leftbar">
            {renderSelectedTab()}
        </div>
    );
};

export default LeftAppBar;