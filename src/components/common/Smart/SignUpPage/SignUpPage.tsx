import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import constantData from 'src/utils/constants/constant'
import "src/components/common/Smart/SignUpPage/SignUpPage.scss"

const theme = createTheme();

export default function SignUp() {
  const [email, setEmail] = React.useState("")
  const [emailError, setEmailError] = React.useState("");
  const [password, setPassword] = React.useState("")
  const [passwordError, setPasswordError] = React.useState("");
  const [firstname, setFirstName] = React.useState("");
  const [firstnameError, setFirstNameError] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [lastnameError, setLastNameError] = React.useState("");
  const { Signup_Title, Signup_Btn, Signin_Link } = constantData.SIGNUP_PAGE;

  const emailReg =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
  const passwordReg =
       /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 

  const handleEmail = (e:any) => {
    if (emailReg.test(e.target.value) === true) {
      setEmailError("");
    }
    setEmail(e.target.value);
  };
  const handlePassword = (e:any) => {
    if (passwordReg.test(e.target.value) === true) {
      setPasswordError("");
    }
    setPassword(e.target.value);
  };
  const handleFirstName = (e:any) => {
    if (e.target.value.length) {
      setFirstNameError("");
    }
    setFirstName(e.target?.value);
  };

  const handleLastName = (e:any) => {
    if (e.target.value.length) {
      setLastNameError("");
    }
    setLastName(e.target?.value);
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
      : password?.length !== 8
      ? setPasswordError("Password must be eight characters, at least one letter and one number")
      : setPasswordError(""); 
      !firstname
      ? setFirstNameError("First Name is required.")
      : setFirstNameError("");
    !lastname
      ? setLastNameError("Last Name is required.")
      : setLastNameError("");  
  };
  const verifyErrors = () => {
    if 
      (
      firstname &&
      lastname &&  
      email?.length &&
      emailReg.test(email) == true &&
      password?.length &&
      password?.length == 8
    ) {
      return true;
    }
    return false;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
         className="Signup-Page "
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            {Signup_Title}
          </Typography>
          <Box component="form" className="inputs" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid className="inputs-section" container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstname}
                  onChange={handleFirstName}
                />
                <p className="errorText" style={{ marginTop: "5px" }}>
                  {firstnameError}
                </p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastname}
                  onChange={handleLastName}
                />
                <p className="errorText" style={{ marginTop: "5px" }}>
                  {lastnameError}
                </p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmail}
                />
                <p className="errorText">{emailError}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handlePassword}
                  value={password}
                  autoComplete="new-password"
                  
                />
                <p className="errorText">{passwordError}</p>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
               {Signup_Btn}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                 {Signin_Link}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}