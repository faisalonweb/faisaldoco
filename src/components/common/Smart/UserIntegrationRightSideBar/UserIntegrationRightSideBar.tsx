import React from 'react';
import { useState } from "react";
import { Button } from "@mui/material";
import ConnectPlatformeModal from 'src/components/shared/popUps/ConnectPlatformModal/ConnectPlatformModal'
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces'
import { localizedData } from "src/utils/helpers/language";

const UserIntegrationRightSideBar = () => {
    const constantData: LocalizationInterface = localizedData();
    const { Connect_Service } = constantData.userIntegrationRightSideBar;
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
            <span>{Connect_Service}</span>
          </div>
        </Button>
        <ConnectPlatformeModal open={open} handleClose={handleClose}/>
        </div>
    );
};

export default UserIntegrationRightSideBar;