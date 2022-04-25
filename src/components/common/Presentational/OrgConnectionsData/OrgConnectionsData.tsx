import React from 'react';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import { Button} from "@mui/material";
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces'
import { localizedData } from "src/utils/helpers/language";

const OrgConnectionsData = () => {
    const constantData: LocalizationInterface = localizedData();
    const { Connection_Text, Make_Connection, Remove_Connection } = constantData.orgConnection;
    return (
        <div className="org-div">
            <div className="org-connection">
                <div className="link-side">
                 <CardMembershipIcon className="icon-div"/>
                 <p>{Connection_Text}</p>
                </div>
                <div className="add-btn-div">
                <Button
                className="add-btn"
                >
                  {Make_Connection}
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
                 {Make_Connection}
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
                 {Remove_Connection}
                </Button>
                </div>
            </div>
        </div>
    );
};

export default OrgConnectionsData;