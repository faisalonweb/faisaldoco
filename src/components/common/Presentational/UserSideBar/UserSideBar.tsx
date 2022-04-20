import React from 'react';
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import { useLocation } from "react-router-dom";

const UserSideBar = () => {
    const { pathname } = useLocation();
    return (
     <div className="user-content">
        <Link className={pathname === '/user/info' ? 'active' : 'inactive'} to="/user/info"><InfoIcon/><span>Info</span></Link>
        <Link className={pathname === '/user/projects' ? 'active' : 'inactive'} to="/user/projects"><AssignmentTurnedInIcon /><span style={{marginLeft:'25px'}}>Projects</span></Link>
        <Link className={pathname === '/user/integrations' ? 'active' : 'inactive'} to="/user/integrations"><IntegrationInstructionsIcon /><span style={{marginLeft:'25px'}}>Integrations</span></Link>
        <Link className={pathname === '/user/orgs' ? 'active' : 'inactive'} to="/user/orgs"><CorporateFareIcon /><span>Orgs</span></Link>
     </div>
    );
};

export default UserSideBar;