import { connect } from 'react-redux';
import { handleCancelPayment } from '../../../store/actionCreators';
import { AddNewPayment } from './AddNewPayment';

const mapStateToProps = state => ({
  balance: state.balance,
});

const mapDispatchToProps = {
  handleCancelPayment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddNewPayment);
