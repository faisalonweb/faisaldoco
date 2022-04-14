import React from 'react';
import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import CodebaseModal from 'src/components/shared/popUps/CodebaseModal/CodebaseModal'
import { userInfoData } from 'src/store/reducers/userInfo'
import { useAppDispatch } from "src/store/hooks";
import { useAppSelector } from "src/store/hooks";
interface props {
    projectTitle: string | undefined;
    hosted: string;
    lastPublish: string;
  }
const UserProjectsCards = ({projectTitle, hosted, lastPublish }: props) => {
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector(
    (state) => state.userInfo
  ); 
    const handleModal = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };   
      useEffect(() => {
        dispatch(userInfoData())
      },[]);  
    console.log("user info",userInfo)  
    return (
        <div className="update-project-card">
           <Box component="div" className="card">
            <div className="card_header">
              <div>
                  <p>{projectTitle}</p>
                  <p style={{paddingTop:'6px'}}>{userInfo.login}</p>
              </div>
              <Button
              variant="contained"
              className="Editbtn"
              onClick={handleModal}

            >
              <div className="btn-content">
                <span>Edit</span>
              </div>
            </Button>
            </div>
            <CodebaseModal open={open} handleClose={handleClose}/>
           <div className="hosted-section">
               <div className="hosted-link">
               <p>Hosted:</p>
               <p>{hosted}</p>
               </div>
               <div className="last-publish">
               <p>Last publish date:</p>
               <p>{lastPublish}</p>  
               </div>
               
           </div>

          </Box>
        </div>
    );
};

export default UserProjectsCards;