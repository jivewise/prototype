import React, { Component, PropTypes } from 'react';
import * as styles from 'components/styles';
import { Field, FieldArray } from 'redux-form';
import GeneralInput from 'components/GeneralInput';
import TypeControls from 'components/TypeControls';

class DeviceTypeForm extends Component {
	static propTypes: {
		handleSubmit: PropTypes.func,
	}

	render() {
		const { handleSubmit, goBack, type, controlValues } = this.props;
		return (<form onSubmit={handleSubmit} className={styles.editType}>
			<Field
				name="name"
				label="Device Type Name"
				component={GeneralInput}
				type="text"
			/>
			<FieldArray
				name="controls"
				controlValues={controlValues}
				component={TypeControls}
			/>
			<div className={styles.formButtons}>
				<button type="submit">Save</button>
				<a onClick={goBack}>Cancel</a>
			</div>
		</form>);
	}
}

export default DeviceTypeForm;
