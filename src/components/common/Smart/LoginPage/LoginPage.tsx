import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import { checkValidEmail } from 'src/utils/helpers/helper'
import { localizedData } from "src/utils/helpers/language";
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces'
import { useAppDispatch } from "src/store/hooks";
import { login } from 'src/store/reducers/userSlice'
import { useAppSelector } from "src/store/hooks";

export default function SignInSide() {
  let navigate = useNavigate();
  const constantData: LocalizationInterface = localizedData();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("");
  const [emailPasswordError, setEmailPasswordError] = useState("");
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("");
  const { Login_Title, Remember_Me, Signin_Btn, Signup_Link, Forgot_Password} = constantData.loginPage;
  
  const { isAuth } = useAppSelector(
    (state) => state.defaultUser
  );
  useEffect(() => {
    localStorage.setItem("useremail","default@gmail.com")
    localStorage.setItem("userpassword","default12");
  });
  useEffect(() => {
    if(isAuth) {
      navigate('/review')
    }
  },[isAuth]);

    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (checkValidEmail(email)){
        setEmailError("");
      }
    };
    const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length) {
        setPasswordError("");
      }
      setPassword(e.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleErrors()
      if(verifyErrors()) {
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
      // if(checkValidUser(email,password)) {
      //       localStorage.setItem('test', JSON.stringify(storeMe))
      //       navigate('/review')
      // }
      // else{
      //       setEmailPasswordError('Incorrect crendentials')
      // }
      dispatch(login(email,password))
      }
      else {
        console.log("invalid data")
      }
      
    };
    const handleErrors = () => {
      !email
        ? setEmailError("Email is required.")
        : !checkValidEmail(email)
        ? setEmailError("Invalid Email.")
        : setEmailError("");
      !password
        ? setPasswordError("Password is required.")
        : setPasswordError(""); 
    };
    const verifyErrors = () => {
      if 
        (
        email?.length &&
        checkValidEmail(email) === true &&
        password?.length
      ) {
        return true;
      }
      return false;
    };
  return (
    <>
     <CssBaseline />
      <Grid container component="main" sx={{ height: '100vh' }} style={{display:'flex', justifyContent:'center'}}>
          <Box
           className="Login-Page"
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar>
            <Typography className="login-title" component="h1" variant="h5">
              {Login_Title}
            </Typography>
            <Box className="inputs" component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid className="inputs-section" container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={handleEmail}
              />
               <p className="errorText">{emailError}</p>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handlePassword}
                  value={password}
                  autoComplete="current-password"
              />
              <p className="errorText">{passwordError}</p>
              <p className="errorText">{emailPasswordError}</p>
                </Grid>
              </Grid>
              
              <FormControlLabel
                control={<Checkbox value="remember" sx={{
                  "&.Mui-checked": {
                    "&, & + .MuiFormControlLabel-label": {
                      color: "var(--normal-text)"
                    }
                  }
                }} />}
                label={<Typography className="remember-me">{Remember_Me}</Typography>}
              />
              <Button
                className="submit-button"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {Signin_Btn}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link className="forgot-link" href="#" variant="body2">
                    {Forgot_Password}
                  </Link>
                </Grid>
                <Grid item>
                  <Link className="signup-link" href="/signup" variant="body2">
                    {Signup_Link}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Grid>
      </>
  );
}