import React from 'react';
import { Box, Button } from "@mui/material";

interface props {
    providerName: string | undefined;
    providerLink: string;
  }
const UserIntegrationCards = ({providerName, providerLink }: props) => {
    return (
        <div className="update-project-card">
           <Box component="div" className="card">
            <div className="card_header">
              <div>
                  <p>Provider name</p>
                  <p style={{paddingTop:'6px'}}>{providerName}</p>
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
               <p>{providerLink}</p>
               </div>
           </div>

          </Box>
        </div>
    );
};

export default UserIntegrationCards;