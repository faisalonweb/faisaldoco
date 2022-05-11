import React, { useLayoutEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useAuth0 } from '@auth0/auth0-react'

export default function SignInSide() {
  
  const { loginWithRedirect, isAuthenticated } = useAuth0();
 
  useLayoutEffect(() => {
    if(!isAuthenticated) {
      loginWithRedirect()
    }
  },[]);
  
  return (
    <>
     <CssBaseline />
      </>
  );
}