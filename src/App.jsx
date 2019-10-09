import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Payments from './components/Payments/PaymentsContainer';
import Login from './components/Login/LoginContainer';
import * as firebase from 'firebase/app';
import { logInUser } from './store/actionCreators';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import 'firebase/auth';
import 'typeface-roboto';

const mapStateToProps = state => ({
  isAuthorized: state.isAuthorized,
});

const mapDispatchToProps = {
  logInUser,
};

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enhance(({ isAuthorized, logInUser }) => {
  const [isLoading, setState] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setState(false);
      user && logInUser();
    });
  }, [logInUser]);
  if (isLoading)
    return (
      <Loading>
        <LoadingText>Загрузка...</LoadingText>
      </Loading>
    );
  return <>{isAuthorized ? <Payments /> : <Login />}</>;
});

const Loading = styled(Box)({
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

const LoadingText = styled(Typography)({
  color: '#fff',
  fontSize: '5vh',
});
