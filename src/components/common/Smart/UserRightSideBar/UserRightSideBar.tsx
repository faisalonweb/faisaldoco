import React from 'react';
import { useState } from "react";
import { Button} from "@mui/material";
import CodebaseModal from 'src/components/shared/popUps/CodebaseModal/CodebaseModal'

const UserRightSideBar = () => {
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
                <span>Connect Codebase</span>
              </div>
            </Button>
            <CodebaseModal open={open} handleClose={handleClose}/>
            </div>
    );
};

export default UserRightSideBar;