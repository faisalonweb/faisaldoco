import React from 'react';
import { Button} from "@mui/material";

const UserRightSideBar = () => {
    return (
        <div className='content'>
           <a
           className="anchor-class"
           href={`${process.env.REACT_APP_AUTH_URI}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=user repo`}
           >
           <Button
              variant="contained"
              className="Publishbtn"
            >
              <div className="btn-content">
                <span>Connect Codebase</span>
              </div>
            </Button>
          </a>
            
            </div>
    );
};

export default UserRightSideBar;