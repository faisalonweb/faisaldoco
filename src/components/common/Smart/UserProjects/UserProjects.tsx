import React from 'react';
import UserProjectsCards from 'src/components/common/Presentational/UserProjectsCards/UserProjectsCards'
import { useAppSelector } from "src/store/hooks";
import { Grid } from "@mui/material";

const UserProjects = () => {
    const { projects } = useAppSelector(
        (state) => state.defaultUser
      );
    return (
        <div className="update-project">
           {projects?.length &&
                  projects?.map((item) => (
                    <Grid key={item.project_title} item lg={6} xl={3} md={4} sm={6} xs={12}> 
                    <div className="doc-item">
                        <UserProjectsCards projectTitle={item.project_title} hosted={item.hosted} lastPublish={item.last_publish}/>
                    </div>
                    </Grid> 
                  ))}
        </div>
    );
};

export default UserProjects;