import { styled } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

export const FilterStatus = styled(Select)({
  width: '15%',
  marginRight: 10,
});

export const FilterWrapperDate = styled(Box)({
  width: '28%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 20,
  height: '100%',
});

export const FilterLabelText = styled(Typography)({
  marginRight: 5,
});

export const FilterWrapperAmount = styled(Box)({
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 20,
  height: '100%',
});

export const FilterTextSeparator = styled(Typography)({
  margin: 5,
});

export const WrapperSearch = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  width: '15%',
  height: '100%',
  borderRadius: 0,
  boxShadow: 'none',
  marginRight: 20,
});

export const ControlPanelWrapper = styled(Box)({
  height: '7%',
  width: '90%',
  display: 'flex',
  marginTop: '2vh',
  justifyContent: 'flex-end',
  alignItems: 'center',
  background: '#fff',
  borderRadius: '1vh',
});

export const NewPayment = styled(Fab)({
  height: '8vh',
  width: '8vh',
  position: 'absolute',
  left: '3%',
});
