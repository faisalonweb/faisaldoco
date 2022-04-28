import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useAuth0 } from '@auth0/auth0-react'

const Review = () => {
    const { getAccessTokenSilently } = useAuth0();
    useEffect(() => {
    getToken();
  });
  
  const getToken = async() => {
   const token = await getAccessTokenSilently()
   console.log("token from auth0",token)
   localStorage.setItem("access-token",token)
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