import { connect } from 'react-redux';
import { handleUserExit } from '../../../store/actionCreators';
import { Header } from './Header';

const mapStateToProps = state => ({
  balance: state.balance,
  email: state.email,
});

const mapDispatchToProps = {
  handleUserExit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
