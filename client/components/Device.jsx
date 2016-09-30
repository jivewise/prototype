import React, { Component, PropTypes } from 'react';
import partial from 'lodash/partial';
import * as styles from 'components/styles';

class Device extends Component {
	static propTypes: {
		device: PropTypes.obj,
		type: PropTypes.obj,
		onSelect: Proptypes.func,
	}

	render() {
		const { device, type, onSelect } = this.props;
		const clicked = partial(onSelect, device);

		return (<div className={styles.device} onClick={clicked}>
			<h2>{ device.name }</h2>
			<sub>{ type ? type.name : ""} - { device.ip }</sub>
			<i className="fa fa-angle-right" />
		</div>);
	}
}

export default Device;
