import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

export const HeaderWrapper = styled(Box)({
  height: '7%',
  width: '90%',
  display: 'flex',
  marginTop: '2vh',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#fff',
  borderRadius: '1vh',
});

export const TextHeaderName = styled(Typography)({
  fontSize: '100%',
  fontWeight: 'bold',
  marginLeft: '3vh',
});

export const TextHeaderBalance = styled(Typography)({
  fontSize: '100%',
  fontWeight: 'bold',
  color: '#12c329',
});

export const ExitIcon = styled(ExitToAppRoundedIcon)({
  marginRight: '3vh',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
});
