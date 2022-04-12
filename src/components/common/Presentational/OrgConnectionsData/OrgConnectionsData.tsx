import React from 'react';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import { Button} from "@mui/material";
const OrgConnectionsData = () => {
    return (
        <div className="org-div">
            <div className="org-connection">
                <div className="link-side">
                 <CardMembershipIcon className="icon-div"/>
                 <p>Org/account connection link</p>
                </div>
                <div className="add-btn-div">
                <Button
                className="add-btn"
                >
                 Make Connection
                </Button>
                </div>
            </div>
            <div className="org-connection">
                <div className="link-side">
                 <CardMembershipIcon className="icon-div"/>
                 <p>Org/account connection link</p>
                </div>
                <div className="add-btn-div">
                <Button
                className="add-btn"
                >
                 Make Connection
                </Button>
                </div>
            </div>
            <div className="org-connection">
                <div className="link-side">
                 <CardMembershipIcon className="icon-div"/>
                 <p>Org/account connection link</p>
                </div>
                <div className="add-btn-div">
                <Button
                className="remove-btn"
                >
                 Remove Connection
                </Button>
                </div>
            </div>
        </div>
    );
};

export default OrgConnectionsData;