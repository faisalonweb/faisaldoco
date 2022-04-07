import React from 'react';
import { Box, Button } from "@mui/material";
import Logo404 from "src/assets/images/Frame404.png";

interface props {
    projectTitle: string | undefined;
    hosted: string;
    lastPublish: string;
  }
const UserProjectsCards = ({projectTitle, hosted, lastPublish }: props) => {
    return (
        <div className="update-project-card">
           <Box component="div" className="card">
            <div className="card_header">
              <div>
                  <p>Project title</p>
                  <p style={{paddingTop:'6px'}}>{projectTitle}</p>
              </div>
              <Button
              variant="contained"
              className="Editbtn"
            >
              <div className="btn-content">
                <span>Edit</span>
              </div>
            </Button>
            </div>
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