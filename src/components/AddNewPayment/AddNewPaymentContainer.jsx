import { connect } from 'react-redux';
import {
  handleNewPayment,
  handleCreatePayment,
  handleCancelPayment,
} from '../../store/actionCreators';
import AddNewPayment from './AddNewPayment';

const mapStateToProps = state => ({
  balance: state.balance,
  sort: state.sort,
});

const mapDispatchToProps = {
  handleNewPayment,
  handleCreatePayment,
  handleCancelPayment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddNewPayment);
