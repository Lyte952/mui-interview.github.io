import React from 'react';
import * as MUI from '@mui/material';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

class Top extends React.Component {
  render(){
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Navbar
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
        <MUI.Button variant="contained"color="primary" px="10px" py="10px">Click Me</MUI.Button>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Top />
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
