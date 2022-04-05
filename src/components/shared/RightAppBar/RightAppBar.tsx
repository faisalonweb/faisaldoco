import React from 'react';
import ReviewRightSideBar from 'src/components/common/Smart/ReviewRightSideBar/ReviewRightSideBar'
import UserRightSideBar from 'src/components/common/Smart/UserRightSideBar/UserRightSideBar'
import { useLocation } from "react-router-dom";

const RightAppBar = () => {
  const { pathname } = useLocation();

  const renderSelectedTab = () => {
      switch (pathname) {
        case "/review":
          return <ReviewRightSideBar />;
        case "/user":
            return <UserRightSideBar />;
        case "/user/info":
              return <UserRightSideBar />;  
        case "/user/projects":
                return <UserRightSideBar />;  
        case "/user/integration":
                  return <UserRightSideBar />;        
        default:
          return  <ReviewRightSideBar />   
      }
    };
    
    return (
        <div className="review-rightbar">
            {renderSelectedTab()}
        </div>
    );
};

export default RightAppBar;