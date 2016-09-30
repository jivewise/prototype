import React, { Component, PropTypes } from 'react';
import * as styles from 'components/styles';
import partial from 'lodash/partial';

class Type extends Component {
	static propTypes: {
		type: PropTypes.obj,
	}

	render() {
		const { type, onSelect } = this.props;
		const selected = partial(onSelect, type);
		return (<div className={styles.deviceType} onClick={selected}>
			<h2>{ type.name }</h2>
			<sub>{ type.controls.length } Controls</sub>
			<i className="fa fa-angle-right" />
		</div>);
	}
}

export default Type;
