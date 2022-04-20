import React, { useEffect } from 'react';
import UserProjectsCards from 'src/components/common/Presentational/UserProjectsCards/UserProjectsCards'
import { useAppSelector } from "src/store/hooks";
import { Grid } from "@mui/material";
import { useAppDispatch } from "src/store/hooks";
import { userRepo } from 'src/store/reducers/userRepos'
import { userToken, userCode }  from 'src/store/reducers/userToken'
import { useLocation } from 'react-router-dom'
import  { userInstallationsList, userInstallationsParticularList } from 'src/store/reducers/userSlice'
const queryString = require('query-string');

const UserProjects = () => {
    const dispatch = useAppDispatch();
    const { search } = useLocation()
    const parsed = queryString.parse(search);
    let storedtoken = localStorage.getItem('access_token');
    const { userRepos } = useAppSelector(
      (state) => state.userRepos
    );  
    const { userAccessToken } = useAppSelector(
      (state) => state.userToken
    );  
    localStorage.setItem("code", parsed.code);
    useEffect(() => {
      // dispatch(userInstallationsList())
      // dispatch(userInstallationsParticularList())
      dispatch(userCode(parsed))
      dispatch(userToken())
      // dispatch(userRepo())
      
    },[]);
    useEffect(() => {
      if(userAccessToken) {
      dispatch(userInstallationsList())
      dispatch(userInstallationsParticularList())
      dispatch(userRepo())
      }
    },[userAccessToken]);
    return (
        <div className="update-project">
           {
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