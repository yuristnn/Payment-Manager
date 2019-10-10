// import PropTypes from 'prop-types';
import React from 'react';
import 'typeface-roboto';
import {
  HeaderWrapper,
  TextHeaderName,
  TextHeaderBalance,
  ExitIcon,
} from './common/styles';

export const Header = ({ balance, email, handleUserExit }) => {
  return (
    <HeaderWrapper>
      <TextHeaderName>{email}</TextHeaderName>
      <TextHeaderBalance>Ваш баланc: {balance} руб.</TextHeaderBalance>
      <ExitIcon color="primary" onClick={handleUserExit} />
    </HeaderWrapper>
  );
};

// Header.propTypes = {
//   balance: PropTypes.number,
//   email: PropTypes.string,
//   handleUserExit: PropTypes.func,
// };