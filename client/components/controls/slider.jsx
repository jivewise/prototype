import React, { Component, PropTypes } from 'react';
import Slide from 'react-rangeslider';

class Slider extends Component {
	static propTypes: {
		value: PropTypes.string,
		control: PropTypes.object,
		onChange: PropTypes.func,
	}

	render() {
		const { value, control, onChange } = this.props;
		return (<div>
			<label>{control.name}</label>
			<Slide value={value*1} onChange={onChange} />
		</div>);
	}
}

export default Slider;
