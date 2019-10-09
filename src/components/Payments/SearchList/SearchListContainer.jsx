import { connect } from 'react-redux';
import {
  handleCloseSearch,
  handleOpenInfo,
} from '../../../store/actionCreators';
import { SearchList } from './SearchList';

const mapStateToProps = state => ({
  search: state.search,
  paylist: state.paylist,
});

const mapDispatchToProps = {
  handleCloseSearch,
  handleOpenInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchList);
