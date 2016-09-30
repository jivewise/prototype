import React, { Component, PropTypes } from 'react';
import * as styles from 'components/styles';
class Select extends Component {
	static propTypes: {
		value: PropTypes.string,
		control: PropTypes.object,
		onChange: PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		const { onChange } = this.props;
		onChange(e.target.value);
	}

	render() {
		const { value, control } = this.props;
		return (<div>
			<label>{control.name}</label>
			<div className={styles.selectWrapper}>
				<select defaultValue={value} onChange={this.onChange}>
					{ control.options.map((option) => <option key={option} value={option}>{option}</option>) }
				</select>
				<i className="fa fa-angle-down" />
			</div>
		</div>);
	}
}

export default Select;
