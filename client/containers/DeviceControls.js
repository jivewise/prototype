import { connect } from 'react-redux';
import DeviceControls from 'components/DeviceControls';
import * as viewActions from 'actions/viewState';
import * as deviceActions from 'actions/device';
import { bindActionCreators } from 'redux';

export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		goBack: viewActions.unselectDevice,
		remove: deviceActions.removeDevice
	}, dispatch);
}

export function mapStateToProps({ deviceTypes }, { device }) {
	const type = deviceTypes.find((deviceType) => {
		return deviceType.id === device.typeId;
	});

	return { type };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceControls);
