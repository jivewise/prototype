import React, { Component, PropTypes } from 'react';
import Device from 'containers/Device';
import * as styles from 'components/styles';

class DeviceList extends Component {
	static propTypes: {
		devices: PropTypes.array,
		addDevice: PropTypes.func,
	}

	render() {
		const { devices, addDevice } = this.props;

		return (
			<div className={styles.deviceList}>
				<h1 className={styles.devicesHeader}>
					<a className={styles.addDevice} onClick={addDevice}>
						<i className="fa fa-plus" />
					</a>
					Your Devices
				</h1>
				{ devices.map((device) =>
					<Device key={device.id} device={device} />
				)}
			</div>
		);
	}
}

export default DeviceList;
