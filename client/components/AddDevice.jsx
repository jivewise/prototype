import React, { Component, PropTypes } from 'react';
import * as styles from 'components/styles';
import GeneralInput from 'components/GeneralInput';
import { Field } from 'redux-form'

class AddDevice extends Component {
	static propTypes: {
		deviceTypes: PropTypes.array,
		cancelAddDevice: PropTypes.func,
		saveDevice: PropTypes.func,
		fields: PropTypes.obj.isRequired,
	}

	constructor(props) {
		super(props);
		this.onSave = this.onSave.bind(this);
	}

	onSave(values) {
		this.props.saveDevice(values);
	}

	render() {
		const { deviceTypes, cancelAddDevice, handleSubmit } = this.props;
		return (<form name="addDeviceForm" onSubmit={handleSubmit(this.onSave)}>
			<h1 className={styles.devicesHeader}>Add Device</h1>
			<div>
				<Field
					name="deviceName"
					label="Device Name"
					component={GeneralInput}
					type="text"
				/>
			</div>
			<div>
				<Field
					label="Device IP"
					name="deviceIP"
					component={GeneralInput}
					type="text"
					placeholder="Device IP"
				/>
			</div>
			<div className={styles.inputContainer}>
				<label>Device Type</label>
				<div className={styles.selectWrapper}>
					<Field name="deviceType" component="select">
						{ deviceTypes.map((type) => <option value={type.id}>{type.name}</option>) }
					</Field>
					<i className="fa fa-angle-down" />
				</div>
			</div>
			<div className={styles.formButtons}>
				<button type="submit">
					<i className="fa fa-plus" />Add
				</button>
				<a onClick={cancelAddDevice}>Cancel</a>
			</div>
		</form>);
	}
}
export default AddDevice;
