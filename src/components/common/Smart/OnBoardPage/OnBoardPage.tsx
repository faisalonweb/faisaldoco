import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import OutlinedInput from '@mui/material/OutlinedInput';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useAppSelector } from "src/store/hooks";
import {useNavigate} from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces'
import { localizedData } from "src/utils/helpers/language";
import { languageList, options } from "src/utils/constants/constant";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function OnBoardPage() {
  const [company, setCompany] = React.useState("")
  const [firstname, setFirstName] = React.useState("");
  const [firstnameError, setFirstNameError] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [lastnameError, setLastNameError] = React.useState("");
  const [langName, setLangName] = React.useState<string[]>([]);
  const [langError, setLangError] = React.useState("");
  const [role, setRole] = React.useState('');
  let navigate = useNavigate();
  const sortedData = languageList.sort((a, b) => a.localeCompare(b))
  const { userSignup } = useAppSelector(
    (state) => state.defaultUser
  );
  const constantData: LocalizationInterface = localizedData();
  const { onBoard, SelectLanguage, SelectRole} = constantData.onBoardPage;

  React.useEffect(() => {
    if(!userSignup) {
      navigate('/signup')
    }
  });
  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent<typeof langName>) => {
    const {
      target: { value },
    } = event;
    setLangName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleNav = () => {
    navigate('/invite')
  };

  const handleCompany = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
    
  };
  const handleFirstName = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length) {
      setFirstNameError("");
    }
    setFirstName(e.target?.value);
  };

  const handleLastName = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length) {
      setLastNameError("");
    }
    setLastName(e.target?.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("lang names",langName)
    handleErrors()
    if(verifyErrors()) {
      const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      companyName: data.get('companyName'),
      langNames: data.get('demo-multiple-checkbox'),
    });
    }
    else {
      console.log("inverifyerro")
    }
    
  };
  const handleErrors = () => {
      if(!firstname ) {
        setFirstNameError("First Name is required.")
      }
      else if(!isLetters(firstname)) {
        setFirstNameError("Text must be String.")
      }
      else {
        setFirstNameError("");
      }
      
      if(!lastname) {
        setLastNameError("Last Name is required.")
      }
      else if(!isLetters(lastname)) {
        setLastNameError("Text must be String.")
      }
      else {
        setLastNameError(""); 
      }
      if(!langName.length) {
        setLangError("Language is required.")
      }
      else {
        setLangError(""); 
      }
  };
  const verifyErrors = () => {
    if 
      (
      firstname &&
      lastname &&
      langName
    ) {
      return true;
    }
    return false;
  };
  const isLetters = (str:string) => /^[A-Za-z]*$/.test(str);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
         className="OnBoard-Page"
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <CheckCircleOutlineOutlinedIcon />    
          </Avatar>
          <Typography component="h1" variant="h5">
            {onBoard}
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
                  id="companyName"
                  label="Company Name (optional)"
                  name="companyName"
                  autoComplete="family-name"
                  value={company}
                  onChange={handleCompany}
                />
                <p className="errorText"></p>
              </Grid>
              <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="demo-multiple-checkbox-label">{SelectLanguage}</InputLabel>
                <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={langName}
                onChange={handleChange}
                input={<OutlinedInput label="Select Language" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                >
                {sortedData?.map((name) => (
                    <MenuItem key={name} value={name}>
                    <Checkbox checked={langName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                    </MenuItem>
                ))}
                </Select>
                 
               </FormControl>
                <p className="errorText" style={{ marginTop: "5px" }}>
                  {langError}
                </p> 
              </Grid>
              <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-label">{SelectRole}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Select Role"
                onChange={handleRoleChange}
              >
                {options?.map(option => {
                return (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label ?? option.value}
                  </MenuItem>
                );
             })}
              </Select>
              </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleNav}
              sx={{ mt: 3, mb: 2 }}
            >
               Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}