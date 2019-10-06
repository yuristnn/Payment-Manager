import React from 'react';
import 'typeface-roboto';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
  HeaderWrapper,
  TextHeaderName,
  TextHeaderBalance,
  ExitIcon,
} from './common/styles';

export const Header = ({ balance, email, handleUserExit }) => {
  const handleUserExitButton = () => {
    firebase.auth().signOut();
    handleUserExit();
  };
  return (
    <HeaderWrapper>
      <TextHeaderName>{email}</TextHeaderName>
      <TextHeaderBalance>Ваш баланc: {balance} руб.</TextHeaderBalance>
      <ExitIcon color="primary" onClick={handleUserExitButton} />
    </HeaderWrapper>
  );
};
