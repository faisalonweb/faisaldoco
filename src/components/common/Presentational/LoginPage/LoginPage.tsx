import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useAuth0 } from '@auth0/auth0-react'

export default function SignInSide() {
  
  const { loginWithRedirect, isAuthenticated } = useAuth0();
 
  useEffect(() => {
    if(!isAuthenticated) {
      loginWithRedirect()
    }
  },[]);
  
  return (
    <>
     <CssBaseline />
     {/* <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button> */}
      </>
  );
}