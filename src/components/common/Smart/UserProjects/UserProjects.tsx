import React, { useEffect } from 'react';
import UserProjectsCards from 'src/components/common/Presentational/UserProjectsCards/UserProjectsCards'
import { useAppSelector } from "src/store/hooks";
import { Grid } from "@mui/material";
import { useAppDispatch } from "src/store/hooks";
import { userRepo } from 'src/store/reducers/userRepos'

const UserProjects = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(userRepo())
  },[]);
    // const { projects } = useAppSelector(
    //     (state) => state.defaultUser
    //   );
      const { userRepos } = useAppSelector(
        (state) => state.userRepos
      );  
    console.log("user repos",userRepos)  
    return (
        <div className="update-project">
           {userRepos?.length &&
                  userRepos?.map((item:any) => (
                    <Grid key={item.id} item lg={6} xl={3} md={4} sm={6} xs={12}> 
                    <div className="doc-item">
                        <UserProjectsCards projectTitle={item.name} hosted={item.hosted} lastPublish={item.last_publish}/>
                    </div>
                    </Grid> 
                  ))}
        </div>
    );
};

export default UserProjects;