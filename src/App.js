import React from 'react';
import { Card, CardContent, TextField, AppBar, Toolbar, Typography, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "johndoe",
      password: "jaydee",
      username2: "",
      password2: ""
    }
  }

  handleChange = (event) => {
    if (event.target.id=="username"){
    this.setState({
        username2: event.target.value
    });}else if(event.target.id=="password") {
        this.setState({
            password2: event.target.value
        });}
  };      

  handleClick = () => {
    if(this.state.username2 == this.state.username && this.state.password2 == this.state.password) {
      alert("Username matches password✔︎")
    }else {
      alert("Incorrect username or password!!!")
    };
  }

  containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px',
    transition: 'transform 0.5s ease',
    transform: 'translateX(0)'
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
              <TextField id="username" onChange={this.handleChange} type="text" variant="outlined" placeholder="Username" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <TextField id="password" onChange={this.handleChange} type="password" variant="outlined" placeholder="Password" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <Typography sx={{marginBottom: '10px'}}>Forgot password?</Typography>
              <Button onClick={this.handleClick} variant="contained" style={this.buttonStyle} sx={{ backgroundColor: '#19d2b3', ':hover': { backgroundColor: 'white', color: '#19d2b3' } }}>Submit</Button>
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
    borderRadius: '16px',
    transition: 'transform 0.5s ease',
    transform: 'translateX(0)'
  };

  textFieldStyle = {
    marginBottom: '16px',
    borderRadius: '16px'
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
              <TextField type="password" variant="outlined" placeholder="Password" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <TextField type="password" variant="outlined" placeholder="Confirm password" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <TextField type="text" variant="outlined" placeholder="Your favorite color" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <Button variant="contained" style={this.buttonStyle} sx={{ backgroundColor: '#19d2b3', ':hover': { backgroundColor: 'white', color: '#19d2b3' } }}>Submit</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      main: Login
    }
  }

  topButtons = {
    margin: '5px',
    textTransform: 'none',
  };

  Main = (event) => {
    if(event.target.value === "login"){
      this.setState({
        main: Login
      })
    }else if(event.target.value === "signup"){
      this.setState({
        main: Signup
      })
    }
  };

  render() {
    const RenderMain = this.state.main;

    return (
      <div>
        <AppBar position="static" sx={{ backgroundColor: '#19d2b3' }}>
          <Toolbar>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Product Name
            </Typography>
            <Button onClick={this.Main} value="login" variant="contained" style={this.topButtons} sx={{ backgroundColor: 'white', color: '#19d2b3', height: '26px', ':hover': { backgroundColor: '#19d2b3', color: 'white' } }}>Login</Button>
            <Button onClick={this.Main} value="signup" variant="contained" style={this.topButtons} sx={{ backgroundColor: 'white', color: '#19d2b3', height: '26px', ':hover': { backgroundColor: '#19d2b3', color: 'white' } }}>Sign Up</Button>
          </Toolbar>
        </AppBar>

        <RenderMain />

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
