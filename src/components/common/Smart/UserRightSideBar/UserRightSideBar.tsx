import React from 'react';
import { Button} from "@mui/material";

const UserRightSideBar = () => {

    return (
        <div className='content'>
           <a
           className="anchor-class"
           href={`https://github.com/login/oauth/authorize/?client_id=2b828bccbb2eba775abe&redirect_uri=http://localhost:3000/user/projects&scope=user repo`}
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