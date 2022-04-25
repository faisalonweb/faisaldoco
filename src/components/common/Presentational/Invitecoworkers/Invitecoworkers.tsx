import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useNavigate} from 'react-router-dom';
import { useAppSelector } from "src/store/hooks";
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces'
import { localizedData } from "src/utils/helpers/language";

const Invitecoworkers = () => {
    const constantData: LocalizationInterface = localizedData();
    const { Title, Subtitle, Invite_As, Send_Invites, Continue_Button, Select_Role} = constantData.inviteCo;
    const [role, setRole] = React.useState('');
    let navigate = useNavigate();
    const { userSignup } = useAppSelector(
        (state) => state.defaultUser
      );
    const handleRoleChange = (event: SelectChangeEvent<string>) => {
        setRole(event.target.value);
      };
      useEffect(() => {
        if(!userSignup) {
          navigate('/signup')
        }
      });  
      const handleNav = () => {
        navigate('/subscribe')
      };
    return (
        <div className="invite-coworkers">
            <div className="invite-coworkers-content">
                <div className="documatic-logo">
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <CheckCircleOutlineOutlinedIcon />    
                </Avatar>
                </div>
                <div className="invite-title">
                    <p>{Title}</p>
                </div>
                <div className="invite-subtitle">
                     <p>{Subtitle}</p>
                </div>
                <div className="invite-section">
                  <div className="invite-inuput">
                  <TextField
                    className="full-field"
                    type="text"
                    variant="outlined"
                    placeholder="Shane@documatic.com"
                    multiline
                    rows={4}
                    style = {{width: '100%'}}
                 />
                  </div>
                  <div className="send-invites-section">
                      <div className="role-dropdown-section">
                      <div className="invite-as">
                        <p>{Invite_As}</p>
                      </div>  
                      <div className="role-dropdown">
                      </div> 
                        <FormControl style={{minWidth: 170}} fullWidth>
                        <InputLabel id="demo-simple-select-label">{Select_Role}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={role}
                            label="Select Role"
                            onChange={handleRoleChange}
                        >
                            <MenuItem value={10}>Founder</MenuItem>
                            <MenuItem value={20}>Engineer Lead</MenuItem>
                            <MenuItem value={30}>Product Lead</MenuItem>
                            <MenuItem value={30}>Sales</MenuItem>
                            <MenuItem value={30}>Engineer</MenuItem>
                        </Select>
                        </FormControl>
                      </div>
                      <div className="send-invites-btn">
                      <Button
                        type="submit"
                        className="invite-btn"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                       >
                        {Send_Invites}
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
                    {Continue_Button}
                 </Button>
                 </div>   
            </div>
        </div>
    );
};

export default Invitecoworkers;