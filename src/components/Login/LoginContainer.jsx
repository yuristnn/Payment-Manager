import { connect } from 'react-redux';
import { logInUser } from '../../store/actionCreators';
import Login from './Login';

const mapStateToProps = state => ({
  id: state.id,
  balance: state.balance,
  name: state.name,
});

const mapDispatchToProps = {
  logInUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
