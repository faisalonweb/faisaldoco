import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useAuth0 } from '@auth0/auth0-react'
import {useNavigate} from 'react-router-dom';

const Review = () => {
  const { getAccessTokenSilently, isAuthenticated, isLoading, user } = useAuth0();
  let navigate = useNavigate();
  useEffect(() => {
    console.log("user data is and isauth", user, isAuthenticated)
    if (isAuthenticated) {
      if(user?.email_verified) {
        console.log("user data is and isauth", user, isAuthenticated)
        getToken();
      }
      else {
        navigate('/verifyemail')
      }
    }
    else if(!isAuthenticated && !isLoading) {
      navigate('/verifyemail')
    }
    
  },[isAuthenticated, isLoading]);
  
  const getToken = async() => {
   const token = await getAccessTokenSilently()
   console.log(token);
   localStorage.setItem("access-token",token)
  }

  if (isLoading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
      );
  }
    
  return (
    <div className="review-page">
      <TextField
          className="full-field"
          type="text"
          variant="outlined"
          placeholder="Document"
          multiline
          rows={35}
          maxRows={40}
          style = {{width: '60%'}}
        />
    </div>
  );
};

export default Review;