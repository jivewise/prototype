import { connect } from 'react-redux';
import UserDevices from 'components/UserDevices';

export default connect(mapStateToProps)(UserDevices);

export function mapStateToProps({ viewState }) {
	return { ...viewState };
}
