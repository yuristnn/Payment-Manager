import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

export const Wrapper = styled(Box)({
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

export const LoginForm = styled('form')({
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

export const Heading = styled(Typography)({});

export const Input = styled(TextField)({
  margin: 0,
});

export const LoginButton = styled(Button)({
  border: 0,
  color: 'white',
  fontSize: 20,
  height: 56,
  padding: '0 30px',
});

export const Error = styled(Typography)({
  color: '#ff764b',
});
