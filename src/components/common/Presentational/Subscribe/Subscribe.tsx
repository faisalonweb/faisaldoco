import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useNavigate} from 'react-router-dom';
import { useAppSelector } from "src/store/hooks";
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces'
import { localizedData } from "src/utils/helpers/language";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Subscribe = () => {
    const constantData: LocalizationInterface = localizedData();
    const { Title, 
            Subtitle, 
            Subscribe_Weekly, 
            Subscribe_Weekly_Desc, 
            Follow_Us_Title, 
            Follow_Us_Desc, 
            Documatic_Btn, 
            Continue_Btn  } = constantData.subscribePage;
    let navigate = useNavigate();
    const { userSignup } = useAppSelector(
        (state) => state.defaultUser
      );
    // useEffect(() => {
    //     if(!userSignup) {
    //       navigate('/signup')
    //     }
    //   });  
      const handleNav = () => {
        navigate('/goodtogo')
      };
    return (
        <div className="subscribe-page">
            <div className="subscribe-content">
                
                <div className="subscribe-title">
                    <p>{Title}</p>
                </div>
                <div className="subscribe-subtitle">
                     <p>{Subtitle}</p>
                </div>
                <div className="subscribe-section">
                 <div className="weekly-updates">
                     <div className="weekly-updates-content">
                      <p className="subscribe-p">{Subscribe_Weekly}</p>
                      <p className="email-p">{Subscribe_Weekly_Desc}</p>
                     </div>
                     <div className="toggle-btn">
                     <Switch {...label} defaultChecked />
                     </div>
                 </div>
                 <Divider className="divider-class"/>
                 <div className="followus-twitter">
                     <div className="followus-twitter-content">
                     <p className="twitter-p">{Follow_Us_Title}</p>
                      <p className="tweets-p">{Follow_Us_Desc}</p>
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
                          {Documatic_Btn}
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
                    {Continue_Btn}
                 </Button>
                 </div>   
            </div>
        </div>
    );
};

export default Subscribe;