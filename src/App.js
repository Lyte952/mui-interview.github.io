import React from 'react';
import { Card, CardContent, TextField, AppBar, Toolbar, Typography, Button } from '@mui/material';

const App = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    borderRadius: '12px'
  };

  const textFieldStyle = {
    marginBottom: '16px',
    borderRadius: '12px'
  };

  const topButtons = {
    margin: '5px',
    color: 'white',
    textTransform: 'none'
  };

  const buttonStyle = {
    height: '26px',
    textTransform: 'none'
  };


  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            My Navbar
          </Typography>
          <Button variant="contained" style={topButtons} >Login</Button>
          <Button variant="contained" style={topButtons} >Sign Up</Button>
        </Toolbar>
      </AppBar>

      <div style={containerStyle}>
        <Card>
          <CardContent style={containerStyle}>
            <TextField type="email" placeholder='email' style={textFieldStyle} />
            <TextField type="password" placeholder='password' style={textFieldStyle} />
            <Button variant="contained" color="primary" style={buttonStyle} >Submit</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;
