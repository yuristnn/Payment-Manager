import { connect } from 'react-redux';
import {
  handleSortDirection,
  loadState,
  handleChangeSearch,
  handleOpenInfo,
  handleChangeFilterAmountMin,
  handleChangeFilterAmountMax,
  handleChangeFilterStatus,
  handleChangeFilterDateMin,
  handleChangeFilterDateMax,
  handleNewPayment,
  handleCreatePayment,
  handleCancelPayment,
  handleUserExit,
  handleCloseInfo
} from '../../store/actionCreators';
import { Payments } from './Payments';

const mapStateToProps = state => ({
  email: state.email,
  balance: state.balance,

  paylist: state.paylist,

  sortList: state.sortList,

  isOpenSearch: state.isOpenSearch,
  search: state.search,

  isOpenInfo: state.isOpenInfo,
  infoCard: state.infoCard,

  isOpenFilter: state.isOpenFilter,
  filterDate: state.filterDate,
  filterAmount: state.filterAmount,
  filterStatus: state.filterStatus,

  isOpenNew: state.isOpenNew,
});

const mapDispatchToProps = {
  handleUserExit,

  handleSortDirection,

  loadState,

  handleChangeSearch,

  handleOpenInfo,
  handleCloseInfo,

  handleChangeFilterAmountMin,
  handleChangeFilterAmountMax,
  handleChangeFilterStatus,
  handleChangeFilterDateMin,
  handleChangeFilterDateMax,

  handleNewPayment,
  handleCreatePayment,
  handleCancelPayment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Payments);
