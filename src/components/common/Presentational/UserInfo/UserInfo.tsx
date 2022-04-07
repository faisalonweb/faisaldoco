import React from 'react';
import { Button} from "@mui/material";

const UserInfo = () => {
    return (
        <div className="user-info">
            <p>User Info: name, email</p>
            <Button
              variant="contained"
              className="Forgotbtn"
            >
              <div className="btn-content">
                <span>Change Password?</span>
              </div>
            </Button>

        </div>
    );
};

export default UserInfo;