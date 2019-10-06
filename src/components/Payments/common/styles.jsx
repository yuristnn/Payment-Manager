import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #d0d4ed, #3f51b5)',
});

export const CardInfoWrapper = styled(Box)({
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7);',
  zIndex: 5,
});

export const PaperList = styled(Paper)({
  height: '90%',
  width: '90%',
  marginTop: '2vh',
  marginBottom: '3vh',
  background: '#fff',
  borderRadius: '1vh',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#ced2ec',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});

export const Row = styled(TableRow)({
  cursor: 'pointer',
  '&:hover,:focus': {
    backgroundColor: '#ced2ec',
  },
});

export const AddNewPaymentWrapper = styled(Box)({
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7);',
  zIndex: 1,
});