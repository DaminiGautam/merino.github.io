import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import icon8 from "../assets/images/Group 8.png";
import logo from "../assets/images/Logo.png";
import icon9 from "../assets/images/Group 9.png";
import { Link } from 'react-router-dom';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id='nav'>
        <Toolbar>
          <Link to="/home">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={icon8} />
            </IconButton>
          </Link>
          <img src={logo} className="d-block m-auto"></img>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={icon9} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}