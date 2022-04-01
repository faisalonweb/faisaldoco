import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from 'react-router-dom';
import { useAppDispatch } from "src/store/hooks";
import { localizedData } from "src/utils/helpers/language";
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces'
import { logout } from 'src/store/reducers/userSlice'

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<Element | undefined | null>(null);
  const constantData: LocalizationInterface = localizedData();
  let result = JSON.parse(localStorage.getItem('test') || '{}')
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { Profile, Account, Document, Logout } = constantData.appBar;

  const handleOpenUserMenu = (ev:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorElUser(ev.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    setAnchorElUser(null);
     dispatch(logout())
     navigate('/')
  };

  return (
    <AppBar className="app-bar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className='documatic-logo'
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Documatic logo
          </Typography>
          {
            result.myBool ? (
           <>  
          <div>
          <Typography
            className='project-name'
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Project Name
          </Typography> 
          <Typography 
            className='publish-name'
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
              
           Published to: Link to published docs
          </Typography>
          </div>  
         
          <Typography
            className='last-publish'
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            
            <br/>
            Last Published: Datetime last published
          </Typography>
         </> 
            ): (
              ""
            )
          }
          
          <Box sx={{ flexGrow: 0 }}>
          {
            result.myBool ? (
                <>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                  <Typography textAlign="center">{Profile}</Typography>
              </MenuItem>
              <MenuItem>
                  <Typography textAlign="center">{Account}</Typography>
              </MenuItem>
              <MenuItem>
                  <Typography textAlign="center">{Document}</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">{Logout}</Typography>
              </MenuItem>
            </Menu>
                </>
            ): (
              ""
            )
          }  
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
