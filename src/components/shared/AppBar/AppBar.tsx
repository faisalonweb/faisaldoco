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
import { localizedData } from "src/utils/helpers/language";
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces'
import { useAuth0 } from '@auth0/auth0-react'
import DocumaticLogo from "src/assets/images/k4YTRD6.png";
import { useLocation } from "react-router-dom";

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<Element | undefined | null>(null);
  const { pathname } = useLocation();
  const { logout } = useAuth0();
  const constantData: LocalizationInterface = localizedData();
  const { Profile, Account, Document, Logout } = constantData.appBar;

  const handleOpenUserMenu = (ev:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorElUser(ev.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    setAnchorElUser(null);
      logout({
        localOnly: false,
        returnTo: window.location.origin
      })
  };

  return (
    <AppBar className="app-bar" position="static">
      <Container className="container-class" maxWidth="xl">
        <Toolbar className="toolbar-class" disableGutters>
          <div className="documatic_logo">
          <img src={DocumaticLogo} alt="Documatic Logo"/>
          
          <Typography
            className='documatic-text'
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Documatic
          </Typography>
          </div>

          {
            pathname !== '/notpagefound' && pathname !== '/verifyemail' ? (
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
            ): ''
          }
          <Box sx={{ flexGrow: 0 }}>
        
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
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
