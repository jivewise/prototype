import { connect } from 'react-redux';
import Controls from 'components/controls';
import * as actions from 'actions/device';
import { bindActionCreators } from 'redux';

export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		adjustControl: actions.adjustControl,
		callApi: actions.callApi,
	}, dispatch);
}
export function mapStateToProps({ devices, viewState: { isBusy } }, ownProps) {
	const device = devices.find((device) => (device.id === ownProps.device.id));
	return device ? { values: device.values, isBusy } : {};
}


export default connect(mapStateToProps, mapDispatchToProps)(Controls);
