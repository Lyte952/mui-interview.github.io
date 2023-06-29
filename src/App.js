import React from 'react';
import { Card, CardContent, TextField, AppBar, Toolbar, Typography, Button } from '@mui/material';

const App = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px'
  };

  const textFieldStyle = {
    marginBottom: '16px',
    borderRadius: '16px',

  };

  const topButtons = {
    margin: '5px',
    textTransform: 'none',
  };

  const buttonStyle = {
    height: '26px',
    textTransform: 'none'
  };


  return (
    <div>
      <AppBar position="static" >
        <Toolbar sx={{backgroundColor: '#19d2b3'}}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            Product Name
          </Typography>
          <Button variant="contained" style={topButtons} sx={{backgroundColor: 'white', 
                                                              color: '#19d2b3', 
                                                                ':hover': {bgcolor: '#19d2b3', 
                                                                           color: 'white'}}}>Login</Button>
          <Button variant="contained" style={topButtons} sx={{backgroundColor: 'white',
                                                              color: '#19d2b3', 
                                                                ':hover': {bgcolor: '#19d2b3', 
                                                                           color: 'white'}}}>Sign Up</Button>
        </Toolbar>
      </AppBar>

      <div style={containerStyle}>
        <Typography style={{margin: '20px', fontSize:'40px', color: '#19d2b3', marginBottom: '80px'}}>Login</Typography>
        <Card>
          <CardContent style={containerStyle}>
            <TextField type="text" variant='outlined' placeholder='Username' style={textFieldStyle} sx={{'& input': {borderColor: '#19d2b3'}}}/>
            <TextField type="password" variant='outlined' placeholder='Password' style={textFieldStyle} sx={{'& input': {borderColor: '#19d2b3'}}} />
            <Button variant="contained" style={buttonStyle} sx={{backgroundColor: '#19d2b3', ':hover': {bgcolor: 'white', 
                                                                                                        color: '#19d2b3'}}}>Submit</Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card sx={{bgcolor: '#00a388', marginTop: '200px'}}>
          <CardContent>
            <Typography sx={{justifyContent: 'center', color: 'white'}}>Login or Sign Up to enjoy the features of our product!!!</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;
