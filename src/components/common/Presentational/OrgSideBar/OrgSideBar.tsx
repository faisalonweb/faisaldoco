import React from 'react';
import { Link } from "react-router-dom";

const OrgSideBar = () => {
    return (
        <div className="org-content">
           <Link className="text-decor" to="/org/connections">Connections</Link>
           <Link className="text-decor" to="/org/members">Members</Link>
           <Link className="text-decor" to="/org/billing">Billing</Link>
        </div>
    );
};

export default OrgSideBar;