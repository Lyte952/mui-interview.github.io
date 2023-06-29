import React from 'react';
import { Card, CardContent, TextField, AppBar, Toolbar, Typography, Button } from '@mui/material';

class Login extends React.Component {
  containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px'
  };

  textFieldStyle = {
    marginBottom: '16px',
    borderRadius: '16px',
  };

  buttonStyle = {
    height: '26px',
    textTransform: 'none'
  };

  render() {
    return (
      <div>
        <div style={this.containerStyle}>
          <Typography style={{ margin: '20px', fontSize: '40px', color: '#19d2b3', marginBottom: '80px' }}>Login</Typography>
          <Card>
            <CardContent style={this.containerStyle}>
              <TextField type="text" variant="outlined" placeholder="Username" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <TextField type="password" variant="outlined" placeholder="Password" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <Button variant="contained" style={this.buttonStyle} sx={{ backgroundColor: '#19d2b3', ':hover': { backgroundColor: 'white', color: '#19d2b3' } }}>Submit</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

class Signup extends React.Component {
  containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px'
  };

  textFieldStyle = {
    marginBottom: '16px',
    borderRadius: '16px',
  };

  buttonStyle = {
    height: '26px',
    textTransform: 'none'
  };

  render() {
    return (
      <div>
        <div style={this.containerStyle}>
          <Typography style={{ margin: '20px', fontSize: '40px', color: '#19d2b3', marginBottom: '80px' }}>Signup</Typography>
          <Card>
            <CardContent style={this.containerStyle}>
              <TextField type="text" variant="outlined" placeholder="Name" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <TextField type="password" variant="outlined" placeholder="Preferred username" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <TextField type="password" variant="outlined" placeholder="Type preferred password" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <TextField type="password" variant="outlined" placeholder="Confirm password" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <Button variant="contained" style={this.buttonStyle} sx={{ backgroundColor: '#19d2b3', ':hover': { backgroundColor: 'white', color: '#19d2b3' } }}>Submit</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  topButtons = {
    margin: '5px',
    textTransform: 'none',
  };

  render() {
    return (
      <div>
        <AppBar position="static" sx={{ backgroundColor: '#19d2b3' }}>
          <Toolbar>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Product Name
            </Typography>
            <Button value="login" variant="contained" style={this.topButtons} sx={{ backgroundColor: 'white', color: '#19d2b3', ':hover': { backgroundColor: '#19d2b3', color: 'white' } }}>Login</Button>
            <Button value="signup" variant="contained" style={this.topButtons} sx={{ backgroundColor: 'white', color: '#19d2b3', ':hover': { backgroundColor: '#19d2b3', color: 'white' } }}>Sign Up</Button>
          </Toolbar>
        </AppBar>

        <Login />

        <div>
          <Card sx={{ bgcolor: '#00a388', marginTop: '200px' }}>
            <CardContent>
              <Typography sx={{ textAlign: 'center', color: 'white' }}>Login or Sign Up to enjoy the features of our product!!!</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
