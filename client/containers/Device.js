import { connect } from 'react-redux';
import Device from 'components/Device';
import * as actions from 'actions/viewState';
import { bindActionCreators } from 'redux';

export function mapDispatchToProps(dispatch) {
	return bindActionCreators({ onSelect: actions.selectDevice }, dispatch);
}

export function mapStateToProps({ deviceTypes }, { device }) {
	const type = deviceTypes.find((deviceType) => {
		return deviceType.id === device.typeId;
	});

	return { type };
}

export default connect(mapStateToProps, mapDispatchToProps)(Device);
