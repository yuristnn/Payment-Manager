import { connect } from 'react-redux';
import { handleCloseInfo } from '../../../store/actionCreators';
import { InfoCard } from './InfoCard';

const mapStateToProps = state => ({
  infoCard: state.infoCard,
});

const mapDispatchToProps = {
  handleCloseInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoCard);
