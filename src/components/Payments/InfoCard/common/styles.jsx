import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

export const Card = styled(Box)({
  height: 'auto',
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1vh',
  backgroundColor: '#fff',
  padding: '20px',
  zIndex: 1,
});

export const Header = styled(Box)({
  display: 'flex',
  width: '100%',
});

export const HeaderText = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  marginLeft: 24,
  width: '100%',
});

export const Close = styled(CloseIcon)({
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
});
