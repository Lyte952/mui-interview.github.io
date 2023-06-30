import React from 'react';
import { Card, CardContent, TextField, AppBar, Toolbar, Typography, Button, Divider, Stack, Box, Chip} from '@mui/material';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      //csv file needed, but I'm using this.state as a substitute
      username: "johndoe",
      password: "jaydee",
      username2: "",
      password2: ""
    }
  }

  handleChange = (event) => {
    if (event.target.id==="username"){
    this.setState({
        username2: event.target.value
    });}else if(event.target.id==="password") {
        this.setState({
            password2: event.target.value
        });}
  };      

  handleClick = () => {
    if(this.state.username2 === this.state.username && this.state.password2 === this.state.password) {
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
          <Typography style={{ margin: '20px', fontSize: '40px', color: '#19d2b3', marginBottom: '45px', fontWeight: 'bold' }}>Login</Typography>
          <Card>
            <CardContent style={this.containerStyle}>
              <TextField id="username" onChange={this.handleChange} type="text" variant="outlined" placeholder="Username" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <TextField id="password" onChange={this.handleChange} type="password" variant="outlined" placeholder="Password" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <Chip label="Forgot/reset password" clickable="true" variant="filled" sx={{marginBottom: '20px', width: '174px', color: '#19d2b3'}}></Chip>
              <Button onClick={this.handleClick} variant="contained" style={this.buttonStyle} sx={{ backgroundColor: '#19d2b3', ':hover': { backgroundColor: 'white', color: '#19d2b3' } }}>Submit</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      prefUsername: "",
      password: "",
      confirmPassword: "",
      faveColor: ""
    }
  }


  handleChange = (event) => {
    if (event.target.id==="name"){
    this.setState({
        name: event.target.value
    });}else if(event.target.id==="prefUsername") {
        this.setState({
            prefUsername: event.target.value
        });}else if(event.target.id==="password") {
          this.setState({
              password: event.target.value
          });}else if(event.target.id==="confirmPassword") {
            this.setState({
                confirmPassword: event.target.value
            });}else if(event.target.id==="faveColor") {
              this.setState({
                  faveColor: event.target.value
              });}
  };

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
          <Typography style={{ margin: '20px', fontSize: '40px', color: '#19d2b3', marginBottom: '10px', fontWeight: 'bold' }}>Signup</Typography>
          <Card>
            <CardContent style={this.containerStyle}>
              <Box sx={{ p: 2, display: 'flex' }}>
              <Stack alignItems="center" >
              <TextField onChange={this.handleChange} id="name" sx={{ m : '10px', width: '230px' }} type="text" variant="outlined" placeholder="Name" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <TextField onChange={this.handleChange} id="prefUsername" sx={{ m : '10px', width: '230px' }} type="text" variant="outlined" placeholder="Preferred username" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              </Stack>
              </Box>
              <Divider />
              <Box sx={{ p: 2, display: 'flex' }}>
              <Stack alignItems="center" >
              <TextField onChange={this.handleChange} id="password" sx={{ m : '10px', width: '230px' }} type="text" variant="outlined" placeholder="Password" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              <TextField onChange={this.handleChange} id="confirmPassword" sx={{ m : '10px', width: '230px' }} type="text" variant="outlined" placeholder="Confirm password" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
              </Stack>
              </Box>
              <Divider />
              <TextField onChange={this.handleChange} id="faveColor" sx={{ m : '10px', width: '230px' }} type="text" variant="outlined" placeholder="Your favorite color" style={this.textFieldStyle} InputProps={{ style: { borderColor: '#19d2b3' } }} />
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
            <Typography fontWeight="bold" variant="h5" component="div" style={{ flexGrow: 1 }}>
              Product Name
            </Typography>
            <Button onClick={this.Main} value="login" variant="contained" style={this.topButtons} sx={{ backgroundColor: 'white', color: '#19d2b3', height: '26px', ':hover': { backgroundColor: '#19d2b3', color: 'white' } }}>Login</Button>
            <Button onClick={this.Main} value="signup" variant="contained" style={this.topButtons} sx={{ backgroundColor: 'white', color: '#19d2b3', height: '26px', ':hover': { backgroundColor: '#19d2b3', color: 'white' } }}>Sign Up</Button>
          </Toolbar>
        </AppBar>

        <RenderMain />

        <div>
          <Card sx={{ bgcolor: '#00a388', marginTop: '100px', height: '140px' }}>
            <CardContent>
              <Typography sx={{ textAlign: 'center', color: 'white' }}>Login or Sign up to enjoy the features of our product!!!</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
