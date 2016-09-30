import React, { Component, PropTypes } from 'react';

import DeviceList from 'containers/DeviceList';
import DeviceControls from 'containers/DeviceControls';
import AddDevice from 'containers/AddDevice';

class UserDevices extends Component {
	static propTypes: {
		selectedDevice: PropTypes.obj,
		isAddingDevice: PropTypes.bool,
	}

	render() {
		const { selectedDevice, isAddingDevice } = this.props;

		if (selectedDevice) {
			return <DeviceControls device={selectedDevice} />;
		}

		if (isAddingDevice) {
			return <AddDevice />;
		}

		return <DeviceList />;
	}
}

export default UserDevices;
