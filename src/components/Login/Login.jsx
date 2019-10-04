import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
  Wrapper,
  LoginForm,
  Heading,
  Input,
  LoginButton,
  Error
} from './common/styles';

export const Login = ({logInUser}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isErrorEmail, setIsErrorEmail] = useState(false)
  const [isErrorPassword, setIsErrorPassword] = useState(false)
  const [isErrorUserNotFound, setIsErrorUserNotFound] = useState(false)

  const handlerUserlogin = async () => {
    setIsErrorEmail(false)
    setIsErrorPassword(false)
    setIsErrorUserNotFound(false)
    await firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(function(error) {
        if (error.code === 'auth/invalid-email') {setIsErrorEmail(true)}
        if (error.code === 'auth/wrong-password') {setIsErrorPassword(true)}
        if (error.code === 'auth/user-not-found') {setIsErrorUserNotFound(true)}
      });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) logInUser();
    });
    
  };
  return (
    <Wrapper>
      <LoginForm autoComplete="off">
        <Heading variant="h4">Войти</Heading>
        {isErrorEmail && <Error>Неверный адрес эл.почты, попробуйте еще раз </Error> }
        {isErrorPassword && <Error>Неверный пароль, попробуйте еще раз</Error>}
        {isErrorUserNotFound && <Error>Пользователь с таким E-mail не существует, попробуйте еще раз</Error>} 
        <Input
          required
          id="outlined-email-input"
          label="Эл почта"
          type="email"
          name="email"
          value={email}
          autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          required
          id="outlined-password-input"
          label="Пароль"
          type="password"
          name="password"
          value={password}
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          onChange={event => setPassword(event.target.value)}
        />
        <LoginButton
          variant="contained"
          color="primary"
          onClick={handlerUserlogin}
        >
          Войти
        </LoginButton>
      </LoginForm>
    </Wrapper>
  );
}


