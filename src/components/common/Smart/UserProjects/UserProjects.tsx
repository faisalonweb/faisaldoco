import React, { useEffect } from 'react';
import UserProjectsCards from 'src/components/common/Presentational/UserProjectsCards/UserProjectsCards'
import { useAppSelector } from "src/store/hooks";
import { Grid } from "@mui/material";
import { useAppDispatch } from "src/store/hooks";
import { userRepo } from 'src/store/reducers/userRepos'
import axios from "axios"

const UserProjects = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(userRepo())
    axios.post(
      'https://github.com/login/oauth/access_token',
      {},
      {
        params: {
          client_id: '2b828bccbb2eba775abe',
          client_secret: '784a99899f4b167ceb9254b9b98bba3d44a10608',
          code: 'ac6a133dd97923e8598b'
        }
      }
    )
    .then(response => {
      console.log("access token respones",response);
    })
    .catch(error => {
      console.log("access token error",error);
    });
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