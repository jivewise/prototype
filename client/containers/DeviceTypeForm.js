import { connect } from 'react-redux';
import DeviceTypeForm from 'components/DeviceTypeForm';
import * as viewActions from 'actions/viewState';
import * as deviceActions from 'actions/device';
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form'

export function validate(values) {
	const errors = {};

	if (!values.name) {
		errors.name = 'Please enter a device type name';
	}

	if (!values.controls || !values.controls.length) {
		errors.controls = 'Please add at least one control';
	}

	const controlErrors = [];
	values.controls.forEach((control, index) => {
		const controlError = {};
		if (!control.name) {
			controlError.name = 'Please enter a name for the control';
		}

		if (control.type === 'select' && !control.options) {
			controlError.options = 'Please enter an option for the select control';
		}
		controlErrors.push(controlError);
	});

	if (controlErrors.length) {
		errors.controls = controlErrors;
	}
	return errors;
}


export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		goBack: viewActions.unselectDeviceType,
	}, dispatch);
}

export function mapStateToProps(state) {
	const {
		viewState: { selectedDeviceType },
	}= state;
	const selector = formValueSelector('deviceTypeForm');
	const controlValues = selector(state, 'controls')
		? selector(state, 'controls') : selectedDeviceType.controls;

	return {
		initialValues: {
			...selectedDeviceType,
		},
		controlValues
	};
}

const FormWrapper = reduxForm({
	form: 'deviceTypeForm',
	validate,
},
)(DeviceTypeForm);

export default connect(mapStateToProps, mapDispatchToProps)(FormWrapper);
