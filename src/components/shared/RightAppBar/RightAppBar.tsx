import React from 'react';
import ReviewRightSideBar from 'src/components/common/Smart/ReviewRightSideBar/ReviewRightSideBar'
import UserRightSideBar from 'src/components/common/Smart/UserRightSideBar/UserRightSideBar'
import { useLocation } from "react-router-dom";
import UserIntegrationRightSideBar from 'src/components/common/Smart/UserIntegrationRightSideBar/UserIntegrationRightSideBar'

const RightAppBar = () => {
  const { pathname } = useLocation();

  const renderSelectedTab = () => {
      switch (pathname) {
        case "/review":
          return <ReviewRightSideBar />;
        case "/user":
            return "";
        case "/user/info":
              return "";  
        case "/user/projects":
                return <UserRightSideBar />;  
        case "/user/integration":
                  return <UserIntegrationRightSideBar />;        
        default:
          return  ""  
      }
    };
    
    return (
        <div className="review-rightbar">
            {renderSelectedTab()}
        </div>
    );
};

export default RightAppBar;