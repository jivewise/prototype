import React, { Component, PropTypes } from 'react';

class Button extends Component {
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
		const { onChange, value } = this.props;
		onChange(value);
	}

	render() {
		const { control, isBusy } = this.props;
		return (<div>
			<button onClick={this.onChange}>
				{ isBusy && <i className="fa fa-spinner fa-spin" /> } {control.name}
			</button>
		</div>);
	}
}

export default Button;
