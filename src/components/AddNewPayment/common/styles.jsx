import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';


export const AddNewPaymentForm = styled(Box)({
    height: 'auto',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1vh',
    backgroundColor: '#fff',
    padding: '20px',
    zIndex: 1,
  });
  
  export const AddNewPaymentHead = styled(Typography)({
    fontSize: '3vh',
  });
  
  export const AddNewPaymentInput = styled(TextField)({
    width: '100%',
    marginBottom: '0.3vh'
  });
  
  export const AddNewPaymentInputAmount = styled(TextField)({
    width: '35%',
  });
  
  export const AddNewPaymentInputWrapper = styled(Box)({
    height: 70,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: '0.3vh',
  });
  
  export const AddNewPaymentButtonWrapper = styled(Box)({
    width: '35%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
  });
  
  export const AddNewPaymentStatus = styled(Select)({
    width: '30%',
    margin: '0 20px',
  });
  
  export const AddNewPaymentDate = styled(MuiPickersUtilsProvider)({
    width: '30%',
  });
  
  export const AddNewPaymentInputAccountNumber = styled(TextField)({
    width: '100%',
    marginBottom: '0.3vh',
    '&::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '&::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  });