import React, { Component, PropTypes } from 'react';
import Control from 'containers/controls';
import * as styles from 'components/styles';

class DeviceControls extends Component {
	static propTypes: {
		goBack: PropTypes.func,
		device: PropTypes.obj,
		type: PropTypes.obj,
		removeDevice: PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.onRemove = this.onRemove.bind(this);
	}

	onRemove() {
		if (!confirm('Are you sure you want to delete this device?')) {
			return;
		}

		const { remove, device } = this.props;
		remove(device.id);
	}

	render() {
		const { goBack, device, type }  = this.props;

		return(<div className={styles.controlList}>
			<h1 className={styles.devicesHeader}>
				<a onClick={goBack}><i className="fa fa-angle-left" /></a>
				{ device.name }
			</h1>
			{ type.controls.map((control) => <Control control={control} device={device} />) }
			<div className={styles.removeButton}>
				<button onClick={this.onRemove}>
					<i className="fa fa-trash" /> Remove Device
				</button>
			</div>
		</div>);
	}
}

export default DeviceControls;
