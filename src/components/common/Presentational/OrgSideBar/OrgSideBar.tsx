import React from 'react';
import CableIcon from '@mui/icons-material/Cable';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from "react-router-dom";

const OrgSideBar = () => {
    return (
        <div className="org-content">
           <Link className="text-decor" to="/org/connections"><CableIcon /><span style={{marginLeft:'25px'}}>Connections</span></Link>
           <Link className="text-decor" to="/org/members"><CardMembershipIcon /><span style={{marginLeft:'25px'}}>Members</span></Link>
           <Link className="text-decor" to="/org/billing"><AttachMoneyIcon /><span style={{marginLeft:'25px'}}>Billing</span></Link>
        </div>
    );
};

export default OrgSideBar;