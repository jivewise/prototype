import React, { PropTypes } from 'react';
import * as styles from 'components/styles';
import { Field } from 'redux-form';

const ControlSelect = ({ controlName }) => (
	<div className={styles.inputContainer}>
		<label>Device Type</label>
		<div className={styles.selectWrapper}>
			<Field name={`${controlName}.type`} component="select">
				<option value="slider">Slider</option>
				<option value="select">Select</option>
				<option value="button">Button</option>
			</Field>
			<i className="fa fa-angle-down" />
		</div>
	</div>
);

ControlSelect.propTypes = {
	controlName: PropTypes.string,
};

export default ControlSelect;
