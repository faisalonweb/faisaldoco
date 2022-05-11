import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {useNavigate} from 'react-router-dom';
 const VerifyEmail = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    let navigate = useNavigate();
    console.log("user verified email",user?.email_verified)
    console.log("user authencated",isAuthenticated,isLoading)
    useEffect(() => {
        console.log("user verified email",user?.email_verified)
        console.log("user authencated",isAuthenticated,isLoading)
        console.log("user data",user)
        if(isAuthenticated) {
            if(user?.email_verified) {
                navigate('/review')
                console.log("user verified email",user?.email_verified)
            }
        }
        
    }, [isAuthenticated,isLoading])
    console.log("user verified email",user?.email_verified)
        console.log("user authencated",isAuthenticated,isLoading)
    return (
        <div className="verify-email">
            Kindly verify your email.
        </div>
    )
}

export default VerifyEmail;
