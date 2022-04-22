import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useNavigate} from 'react-router-dom';
import { useAppSelector } from "src/store/hooks";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Subscribe = () => {
    let navigate = useNavigate();
    const { userSignup } = useAppSelector(
        (state) => state.defaultUser
      );
    useEffect(() => {
        if(!userSignup) {
          navigate('/signup')
        }
      });  
      const handleNav = () => {
        navigate('/goodtogo')
      };
    return (
        <div className="subscribe-page">
            <div className="subscribe-content">
                
                <div className="subscribe-title">
                    <p>Subscribe to updates</p>
                </div>
                <div className="subscribe-subtitle">
                     <p>Documatic is improving each week. These are the best ways to learn about changes.</p>
                </div>
                <div className="subscribe-section">
                 <div className="weekly-updates">
                     <div className="weekly-updates-content">
                      <p className="subscribe-p">Subscribe to weekly updates</p>
                      <p className="email-p">Email once a week about new features and changes</p>
                     </div>
                     <div className="toggle-btn">
                     <Switch {...label} defaultChecked />
                     </div>
                 </div>
                 <Divider className="divider-class"/>
                 <div className="followus-twitter">
                     <div className="followus-twitter-content">
                     <p className="twitter-p">Follow us Twitter</p>
                      <p className="tweets-p">Tweets about features and tricks</p>
                     </div>
                     <div className="twitter-btn">
                     <Button
                        className="continue"
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                     >
                        <span className="twitter-icon">
                         <TwitterIcon />
                        </span>
                        <span>
                          @linear
                        </span>
                    </Button>
                     </div>
                 </div>
                </div>
                 <div className="continue-btn">
                 <Button
                    className="continue"
                    type="submit"
                    variant="contained"
                    onClick={handleNav}
                    sx={{ mt: 3, mb: 2 }}
                   >
                    Continue
                 </Button>
                 </div>   
            </div>
        </div>
    );
};

export default Subscribe;