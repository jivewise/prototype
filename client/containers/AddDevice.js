import { connect } from 'react-redux';
import AddDevice from 'components/AddDevice';
import * as viewActions from 'actions/viewState';
import * as deviceActions from 'actions/device';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form'

export function validate(values) {
	const errors = {};

	if (!values.deviceName) {
		errors.deviceName = 'Please enter a device name';
	}

	if (!values.deviceIP) {
		errors.deviceIP = 'Please enter a device IP';
	} else {
		const blocks = values.deviceIP.split('.');
		const validBlocks = blocks.reduce((block, mem) => {
			return mem && block*1 <= 255 && block*1 >= 0;
		}, true);

		if (blocks.length !== 4 || !validBlocks) {
			errors.deviceIP = 'Please enter a valid IP address';
		}
	}

	return errors;
}

export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		saveDevice: deviceActions.saveNewDevice,
		cancelAddDevice: viewActions.cancelAddDevice
	}, dispatch);
}

export function mapStateToProps({ deviceTypes }) {
	return {
		deviceTypes,
		initialValues: {
			deviceType: deviceTypes[0].id
		}
	};
}

const AddDeviceForm = reduxForm({
	form: 'addDeviceForm',
	validate,
},
)(AddDevice);

export default connect(mapStateToProps, mapDispatchToProps)(AddDeviceForm);
