import React, { Component, PropTypes } from 'react';
import * as styles from 'components/styles';
import { Field } from 'redux-form';
import DeviceTypeForm from 'containers/DeviceTypeForm';

class EditDeviceType extends Component {
	static propTypes: {
		type: PropTypes.obj,
	}

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.removeType = this.removeType.bind(this);
	}

	onSubmit(newType) {
		const { updateDeviceType, addDeviceType } = this.props;
		if (newType.id) {
			updateDeviceType(newType);
		} else {
			addDeviceType(newType);
		}
	}

	removeType() {
		if (!confirm('Are you sure you want to delete this device type?')) {
			return;
		}

		const { type, removeDeviceType } = this.props;
		removeDeviceType(type.id);
	}

	render() {
		const { type, goBack } = this.props;
		return (<div classNames={styles.deviceTypes}>
			<h1 className={styles.deviceTypeHeader}>
				<a onClick={goBack}><i className="fa fa-angle-left" /></a>
				{ type.id ? 'Edit Device Type' : 'Add Device Type' }
				{ type.id &&
					<a className={styles.removeType} onClick={this.removeType}>
						<i className="fa fa-trash" />
					</a>
				}
			</h1>

			<DeviceTypeForm type={type} onSubmit={this.onSubmit} />

		</div>);
	}
}
export default EditDeviceType;
