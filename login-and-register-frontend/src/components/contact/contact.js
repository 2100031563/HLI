import * as React from 'react';
import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export default function Contact() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="Contact">
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgb(27, 2, 73)"}}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <h3>health insurance</h3>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            color: "white"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}
           style={{ color: "white"}}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[<Link to="/" style={{color: "white"}}>Home</Link>, <li><Link to="/contact"  style={{color: "white"}}>Contact</Link></li>, <li><Link to="/start"  style={{color: "white"}}>health insurance policy</Link></li>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon  style={{ color: "rgb(160, 255, 8)"}}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[<li><Link to="/about"  style={{color: "white"}}>About</Link></li>,<li><Link to="/Design"  style={{color: "white"}}>Design</Link></li>,  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe-_qIWpiGZaRFglLLJUySI6YMvaoRYpmznEf4J8k4fgxDxFw/viewform?usp=sf_link" style={{color: "white"}}>FeedBack</a>,<li><Link to="/login"  style={{color: "white"}}>log out</Link></li>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon  style={{ color: "rgb(160, 255, 8)"}}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
      <DrawerHeader />
      <Typography paragraph>
      <div class="social-container">
      <h1 style={{color: "black"}}>Contact us  with</h1>
     
</div>
<a href="https://www.youtube.com/channel/UCJEQ8j9FpjdpbzGeZkBsWQQ"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="4x" />
</a>
<a href="https://www.facebook.com"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="4x" />
</a>
<a href="https://www.twitter.com" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="4x" />
</a>
<a href="https://instagram.com/health_insurance_96?igshid=YmMyMTA2M2Y="
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="4x" />
</a>
<h1>health insureance company</h1>
<h1>vijayawada</h1>
<h1>contact no: 080-277667</h1>
<h1>contact no: 080-355587</h1>
        </Typography>


    
       
        </Main>
       
    </Box>
    </div>
  );
}