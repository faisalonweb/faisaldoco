import React from 'react';
import { useState } from "react";
import { Button} from "@mui/material";
import ConnectPlatformeModal from 'src/components/shared/popUps/ConnectPlatformModal/ConnectPlatformModal'

const UserIntegrationRightSideBar = () => {

    const [open, setOpen] = useState<boolean>(false)
    const handleModal = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };   
    return (
        <div className='content'>
        <Button
          variant="contained"
          className="Publishbtn"
          onClick={handleModal}
        >
          <div className="btn-content">
            <span>Connect Hositing Platform</span>
          </div>
        </Button>
        <ConnectPlatformeModal open={open} handleClose={handleClose}/>
        </div>
    );
};

export default UserIntegrationRightSideBar;