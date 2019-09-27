import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

class Login extends Component {
  state = {
    user: { email: '', password: '' },
  };

  handlerUserlogin = async () => {
    const login = this.props.logInUser;
    await firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.user.email,
        this.state.user.password,
      )
      .catch(function(error) {
        console.log(error.message);
      });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) login();
    });
  };

  handleChangeEmail = email => {
    this.setState(() => ({
      ...this.state,
      user: {
        ...this.state.user,
        email,
      },
    }));
  };

  handleChangePassword = password => {
    this.setState(() => ({
      ...this.state,
      user: {
        ...this.state.user,
        password,
      },
    }));
  };

  render() {
    return (
      <Wrapper>
        <LoginForm noValidate autoComplete="off">
          <Heading variant="h4">Войти</Heading>
          <Input
            id="outlined-email-input"
            label="Эл почта"
            type="email"
            name="email"
            value={this.state.user.email}
            autoComplete="email"
            margin="normal"
            variant="outlined"
            onChange={event => this.handleChangeEmail(event.target.value)}
          />
          <Input
            id="outlined-password-input"
            label="Пароль"
            type="password"
            name="password"
            value={this.state.user.password}
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            onChange={event => this.handleChangePassword(event.target.value)}
          />
          <LoginButton
            variant="contained"
            color="primary"
            onClick={() => this.handlerUserlogin()}
          >
            Войти
          </LoginButton>
        </LoginForm>
      </Wrapper>
    );
  }
}

export default Login;

const Wrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #d0d4ed, #3f51b5)',
});

const LoginForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 400,
  height: 300,
  borderRadius: 3,
  padding: 50,
  backgroundColor: '#fff',
  boxShadow: '0 1px 10px 2px rgba(0, 0, 0, 0.4)',
});

const Heading = styled(Typography)({});

const Input = styled(TextField)({
  margin: 0,
});

const LoginButton = styled(Button)({
  border: 0,
  color: 'white',
  fontSize: 20,
  height: 56,
  padding: '0 30px',
});
