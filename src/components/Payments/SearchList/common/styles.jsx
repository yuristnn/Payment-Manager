import { styled } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';

export const TableSearchWrapper = styled(Paper)({
  position: 'absolute',
  backgroundColor: '#4052b5',
  zIndex: 2,
  top: '18%',
  width: '80%',
  color: '#fff',
  borderRadius: '1vh',
  overflowY: 'auto',
  height: '40%',
  boxShadow: '0 0 10px rgba(0,0,0,0.8)',
  padding: 5,
  display: 'flex',
  justifyContent: 'center',
  '&::-webkit-scrollbar': {
    width: 16,
    borderRadius: 8,
    backgroundColor: '4052b5',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#ced2ec',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: 8,
    backgroundColor: '4052b5',
  },
});

export const Row = styled(TableRow)({
  cursor: 'pointer',
  '&:hover,:focus': {
    backgroundColor: '#6170c2',
  },
});

export const Cell = styled(TableCell)({
  color: '#fff',
});

export const TextNoResult = styled(Typography)({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 24,
});

export const Close = styled(CloseIcon)({
  color: '#fff',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
});
