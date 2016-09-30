import React, { Component, PropTypes } from 'react';
import Slider from './slider';
import Select from './select';
import Button from './button';
import partial from 'lodash/partial';
import * as styles from 'components/styles';
import classnames from 'classnames';

const CONTROLS = {
	'slider': Slider,
	'select': Select,
	'button': Button,
};

class Controls extends Component {
	static propTypes: {
		device: PropTypes.obj,
		control: PropTypes.obj,
		adjustControl: PropTypes.func,
		values: PropTypes.obj,
	}

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(value) {
		const { device, control, adjustControl, callApi } = this.props;
		if (value) {
			adjustControl(device.id, control.name, value);
		}

		if (control.action) {
			callApi(control.action);
		}
	}

	render() {
		const { device, control, adjustControl, isBusy, values } = this.props;
		const value = values[control.name];
		const ControlType = CONTROLS[control.type];
		const classes = classnames(styles.deviceControl, `${styles.deviceControl}--${control.type}`);

		return (<div className={classes}>
			<ControlType
				isBusy={isBusy}
				control={control}
				value={value}
				onChange={this.onChange}
			/>
		</div>);
	}
}

export default Controls;
