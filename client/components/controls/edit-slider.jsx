import React, { Component, PropTypes } from 'react';
import * as styles from 'components/styles';
import { Field } from 'redux-form';
import GeneralInput from 'components/GeneralInput';
import ControlSelect from './control-select';

class EditSlider extends Component {
	static propTypes: {
		control: PropTypes.obj,
		onRemove: PropTypes.func,
		index: PropTypes.number,
	}

	render() {
		const { control, onRemove, index, controlName } = this.props;

		return(<div className={styles.editControl}>
			<h2>
				Control #{index+1} - {control.name}
				<i onClick={onRemove} className="fa fa-trash" />
			</h2>
			<Field
				label="Control Name"
				name={`${controlName}.name`}
				component={GeneralInput}
				type="text"
				placeholder="Control Name"
			/>
			<ControlSelect controlName={controlName} />
			<Field
				label="Control Action/API"
				name={`${controlName}.action`}
				component={GeneralInput}
				type="text"
				placeholder="Control Action/API"
			/>
		</div>);
	}
}
export default EditSlider;
