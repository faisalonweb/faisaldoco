import React from 'react';
import { useState } from "react";
import { Button} from "@mui/material";
import PublishModal from 'src/components/shared/popUps/PublishModal/PublishModal'

const RightAppBar = () => {

    const [open, setOpen] = useState<boolean>(false)
    const handleModal = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };   
    return (
        <div className="review-rightbar">
            <div className='content'>
            <Button
              variant="contained"
              className="Publishbtn"
              onClick={handleModal}
            >
              <div className="btn-content">
                <span>Publish</span>
              </div>
            </Button>
            <PublishModal open={open} handleClose={handleClose}/>
            </div>
        </div>
    );
};

export default RightAppBar;