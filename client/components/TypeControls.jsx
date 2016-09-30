import React, { Component, PropTypes } from 'react';
import EditSlider from 'components/controls/edit-slider';
import EditSelect from 'components/controls/edit-select';
import EditButton from 'components/controls/edit-button';
import partial from 'lodash/partial';
import * as styles from 'components/styles';

const EDIT_CONTROL = {
	'slider': EditSlider,
	'select': EditSelect,
	'button': EditButton,
};

class TypeControls extends Component {
	static propTypes: {
		fields: PropTypes.array,
	}

	constructor(props) {
		super(props);
		this.renderControlType = this.renderControlType.bind(this);
	}

	renderControlType(controlName, index) {
		const { fields, controlValues } = this.props;
		const control = controlValues[index];
		const remove = partial(fields.remove, index);
		const EditControl = EDIT_CONTROL[control.type];

		return (<EditControl
			key={index}
			control={control}
			controlName={controlName}
			index={index}
			onRemove={remove}
		/>);
	}

	render() {
		const { fields } = this.props;

		return (<div>
			{ fields.map(this.renderControlType) }

			{ fields.length === 0 && <div className={styles.noControls}>
				Device types need at least one control, add controls using the buttons below.
			</div> }

			<div className={styles.addControl}>
				<button type="button" onClick={() => fields.push({type: 'slider'})}>
					<i className="fa fa-sliders" /> Add Slider
				</button>
				<button type="button" onClick={() => fields.push({type: 'select'})}>
					<i className="fa fa-list" /> Add Select
				</button>
				<button type="button" onClick={() => fields.push({type: 'button'})}>
					<i className="fa fa-power-off" /> Add Button
				</button>
			</div>
		</div>)
	}
}

export default TypeControls;
