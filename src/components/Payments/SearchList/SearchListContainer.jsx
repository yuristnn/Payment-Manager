import { connect } from 'react-redux';
import {
  handleChooseSearch,
  handleOpenInfo,
} from '../../../store/actionCreators';
import { SearchList } from './SearchList';

const mapStateToProps = state => ({
  search: state.search,
  paylist: state.paylist,
});

const mapDispatchToProps = {
  handleChooseSearch,
  handleOpenInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchList);
