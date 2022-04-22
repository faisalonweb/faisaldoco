import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import ContactsIcon from '@mui/icons-material/Contacts';
import HubIcon from '@mui/icons-material/Hub';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import {useNavigate} from 'react-router-dom';
import { useAppSelector } from "src/store/hooks";


const GoodToGo = () => {
    let navigate = useNavigate();
    const { userSignup } = useAppSelector(
        (state) => state.defaultUser
      );
    useEffect(() => {
        if(!userSignup) {
          navigate('/signup')
        }
      });  
   
    return (
        <div className="goodtogo-page">
            <div className="goodtogo-content">
                <div className="goodtogo-title">
                    <p>You're good to go</p>
                </div>
                <div className="goodtogo-subtitle">
                     <p>Next, explore the features and cretae issues by pressing c when you're in the app</p>
                </div>
                <div className="goodtogo-section">
                 <div className="tell-your-team">
                  <div className="contact-icon">
                   <ContactsIcon />
                  </div>
                  <div className="contact-info">
                      <p className="tell-title">Tell your team</p>
                      <p className="tell-subtitle">Make sure to invite your team members.</p>
                  </div>
                 </div>
                 <div className="tell-your-team">
                  <div className="contact-icon">
                   <HubIcon />
                  </div>
                  <div className="contact-info">
                      <p className="tell-title">Integrate Github & Slack</p>
                      <p className="tell-subtitle">Make sure to invite your team members.</p>
                  </div>
                 </div>
                 <div className="tell-your-team">
                  <div className="contact-icon">
                   <KeyboardIcon />
                  </div>
                  <div className="contact-info">
                      <p className="tell-title">Keyboard shortcuts</p>
                      <p className="tell-subtitle">Make sure to invite your team members.</p>
                  </div>
                 </div>
                </div>
                 <div className="opendocumatic-btn">
                 <Button
                    className="documatic"
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                   >
                    Open Documatic
                 </Button>
                 </div>   
            </div>
        </div>
    );
};

export default GoodToGo;