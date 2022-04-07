import React from 'react';
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

const UserSideBar = () => {
    return (
     <div className="user-content">
        <Link className="text-decor" to="/user/info"><InfoIcon/><span>Info</span></Link>
        <Link className="text-decor" to="/user/projects"><AssignmentTurnedInIcon /><span style={{marginLeft:'25px'}}>Projects</span></Link>
        <Link className="text-decor" to="/user/integration"><IntegrationInstructionsIcon /><span style={{marginLeft:'25px'}}>Integration</span></Link>
        <Link className="text-decor" to="/user/orgs"><CorporateFareIcon /><span>Orgs</span></Link>
     </div>
    );
};

export default UserSideBar;