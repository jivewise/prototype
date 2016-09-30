import React, { Component, PropTypes } from 'react';
import Type from 'components/type';
import * as styles from 'components/styles';
import EditDeviceType from 'containers/EditDeviceType';
import partial from 'lodash/partial';

class DeviceTypes extends Component {
	static propTypes: {
		show: PropTypes.bool,
		deviceTypes: PropTypes.array,
		selectedDeviceType: PropTypes.obj,
		selectType: PropTypes.func,
	}

	render() {
		const { show, deviceTypes, selectedDeviceType, selectType } = this.props;

		if (!show) {
			return <noscript />;
		}

		if (selectedDeviceType) {
			return <EditDeviceType />
		}

		const addType = partial(selectType, { controls: [{ type: 'button' }] });
		return (<div classNames={styles.deviceTypes}>
			<h1 className={styles.deviceTypeHeader}>
				<a onClick={addType}><i className="fa fa-plus" /></a>
				Your Device Types
			</h1>
			{ deviceTypes.map((type, i) => <Type key={i} type={type} onSelect={selectType} />) }
		</div>);
	}
}

export default DeviceTypes;
