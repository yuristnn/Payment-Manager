import { styled } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

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
  
  export const Cell = styled(TableCell)({
    color: '#fff',
  });
  
  export const TextNoResult = styled(Typography)({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  });