import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import ContactsIcon from '@mui/icons-material/Contacts';
import HubIcon from '@mui/icons-material/Hub';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import {useNavigate} from 'react-router-dom';
import { useAppSelector } from "src/store/hooks";
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces'
import { localizedData } from "src/utils/helpers/language";
import { useAppDispatch } from "src/store/hooks";


const GoodToGo = () => {
    const constantData: LocalizationInterface = localizedData();
    const dispatch = useAppDispatch();
    const { Title, 
            Subtitle,
            Tell_Title, 
            Tell_Subtitle, 
            Integrate_Title, 
            Integrate_Subtitle, 
            Keyboard_Title,
            Keyboard_subtitle, 
            Open_Documatic} = constantData.goodToGo;
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
        navigate('/review')
      };
     
   
    return (
        <div className="goodtogo-page">
            <div className="goodtogo-content">
                <div className="goodtogo-title">
                    <p>{Title}</p>
                </div>
                <div className="goodtogo-subtitle">
                     <p>{Subtitle}</p>
                </div>
                <div className="goodtogo-section">
                 <div className="tell-your-team">
                  <div className="contact-icon">
                   <ContactsIcon />
                  </div>
                  <div className="contact-info">
                      <p className="tell-title">{Tell_Title}</p>
                      <p className="tell-subtitle">{Tell_Subtitle}</p>
                  </div>
                 </div>
                 <div className="tell-your-team">
                  <div className="contact-icon">
                   <HubIcon />
                  </div>
                  <div className="contact-info">
                      <p className="tell-title">{Integrate_Title}</p>
                      <p className="tell-subtitle">{Integrate_Subtitle}</p>
                  </div>
                 </div>
                 <div className="tell-your-team">
                  <div className="contact-icon">
                   <KeyboardIcon />
                  </div>
                  <div className="contact-info">
                      <p className="tell-title">{Keyboard_Title}</p>
                      <p className="tell-subtitle">{Keyboard_subtitle}</p>
                  </div>
                 </div>
                </div>
                 <div className="opendocumatic-btn">
                 <Button
                    className="documatic"
                    type="submit"
                    variant="contained"
                    onClick={handleNav}
                    sx={{ mt: 3, mb: 2 }}
                   >
                    {Open_Documatic}
                 </Button>
                 </div>   
            </div>
        </div>
    );
};

export default GoodToGo;