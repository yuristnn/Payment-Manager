import { styled } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import TableRow from '@material-ui/core/TableRow';

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
  
  export const ExitIcon = styled(ExitToAppRoundedIcon)({
    marginRight: '3vh',
    cursor: 'pointer',
  });
  
  export const CardInfoWrapper = styled(Box)({
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7);',
    zIndex: 1,
  });
  
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
  
  export const Header = styled(Box)({
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
  
  export const ControlPanel = styled(Box)({
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
  
  export const Row = styled(TableRow)({
    cursor: 'pointer',
    '&:hover,:focus': {
      backgroundColor: '#ced2ec',
    },
  });
  