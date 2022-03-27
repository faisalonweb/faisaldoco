import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export const LoginAPI = (email:string,password:string) => {
    let navigate = useNavigate();
    const [useremail, setUserEmail] = useState<string | null>("")
    const [userpassword, setUserPassword] = useState<string | null>("")
    setUserEmail(localStorage.getItem('useremail'))
    setUserPassword(localStorage.getItem('userpassword'))
    if(email === useremail && password === userpassword) {
         return [email,password]
    }else {
         navigate('/')
    }
}

