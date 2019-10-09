import { connect } from 'react-redux';
import {
  handleChangeFilterAmountMin,
  handleChangeFilterAmountMax,
  handleChangeFilterStatus,
  handleChangeFilterDateMin,
  handleChangeFilterDateMax,
  handleNewPayment,
  handleChangeSearch,
  handleOpenSearch,
} from '../../../store/actionCreators';
import { ControlPanel } from './ControlPanel';

const mapStateToProps = state => ({
  paylist: state.paylist,
  filterStatus: state.filterStatus,
  filterAmount: state.filterAmount,
  filterDate: state.filterDate,
});

const mapDispatchToProps = {
  handleChangeFilterAmountMin,
  handleChangeFilterAmountMax,
  handleChangeFilterStatus,
  handleChangeFilterDateMin,
  handleChangeFilterDateMax,
  handleNewPayment,
  handleChangeSearch,
  handleOpenSearch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ControlPanel);
