import React from 'react';
import { useState } from "react";
import { Button} from "@mui/material";
import PublishModal from 'src/components/shared/popUps/PublishModal/PublishModal'
import ShareModal from 'src/components/shared/popUps/ShareModal/ShareModal'
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces'
import { localizedData } from "src/utils/helpers/language";

const ReviewRightSideBar = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const constantData: LocalizationInterface = localizedData();
    const { Publish, Share} = constantData.reviewRightSideBar;
    const handleModal = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };   
      const handleShareModal = () => {
        setOpenModal(true);
      };
      const handleCloseModal = () => {
        setOpenModal(false);
      };  
    return (
        <div className='content'>
            <Button
              variant="contained"
              className="Publishbtn"
              onClick={handleModal}
            >
              <div className="btn-content">
                <span>{Publish}</span>
              </div>
            </Button>
            <Button
              variant="contained"
              className="Sharebtn"
              onClick={handleShareModal}
            >
              <div className="btn-content">
                <span>{Share}</span>
              </div>
            </Button>
            <PublishModal open={open} handleClose={handleClose}/>
            <ShareModal open={openModal} handleCloseModal={handleCloseModal}/>
            </div>
    );
};

export default ReviewRightSideBar;