import { connect } from 'react-redux';
import { handleChooseSearch } from '../../store/actionCreators';
import SearchList from './SearchList';

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = {
  handleChooseSearch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchList);
