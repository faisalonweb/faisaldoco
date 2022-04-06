import React from 'react';
import UserIntegrationCards from 'src/components/common/Presentational/UserIntegrationCards/UserIntegrationCards'
import { useAppSelector } from "src/store/hooks";
import { Box, Grid } from "@mui/material";

const UserIntegration = () => {
    const { integration } = useAppSelector(
        (state) => state.defaultUser
      );
    return (
        <div className="update-project">
           {integration?.length &&
                  integration?.map((item) => (
                    <Grid key={item.provider_name} item lg={6} xl={3} md={4} sm={6} xs={12}> 
                    <div className="doc-item">
                        <UserIntegrationCards providerName={item.provider_name} providerLink={item.provider_link}/>
                    </div>
                    </Grid> 
                  ))}
        </div>
    );
};

export default UserIntegration;