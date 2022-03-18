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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import constantData from 'src/utils/constants/constant'
import "src/components/common/Smart/LoginPage/LoginPage.scss"
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store';
import {useNavigate} from 'react-router-dom';

const theme = createTheme();

export default function SignInSide() {
  let navigate = useNavigate();
  const [useremail, setUserEmail] = useState<any>("")
  const [userpassword, setUserPassword] = useState<any>("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("");
  const { Login_Title, Remember_Me, Signin_Btn, Signup_Link } = constantData.LOGIN_PAGE;

  const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 

  useEffect(() => {
    localStorage.setItem("useremail","default@gmail.com")
    localStorage.setItem("userpassword","default12");
  },[]);

    const handleEmail = (e:any) => {
      if (emailReg.test(e.target.value) === true) {
        setEmailError("");
      }
      setEmail(e.target.value);
    };
    const handlePassword = (e:any) => {
      if (e.target.value.length) {
        setPasswordError("");
      }
      setPassword(e.target.value);
    };
    const getLocalState = () => {
      setUserEmail(localStorage.getItem('useremail'))
      setUserPassword(localStorage.getItem('userpassword'))
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      getLocalState()
      handleErrors()
      if(verifyErrors()) {
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
      if(email == useremail && password == userpassword) {
           navigate('/review')
      }
      {
           navigate('/')
      }
      }
      else {
        console.log("inverifyerro")
      }
      
    };
    const handleErrors = () => {
      !email
        ? setEmailError("Email is required.")
        : emailReg.test(email) == false
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
        emailReg.test(email) == true &&
        password?.length
      ) {
        return true;
      }
      return false;
    };
  return (
    <ThemeProvider theme={theme}>
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
            <Typography component="h1" variant="h5">
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
                </Grid>
              </Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={Remember_Me}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {Signin_Btn}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {Signup_Link}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Grid>
    </ThemeProvider>
  );
}