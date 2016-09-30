import { connect } from 'react-redux';
import DeviceTypes from 'components/DeviceTypes';
import * as viewActions from 'actions/viewState';
import { bindActionCreators } from 'redux';


export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		selectType: viewActions.selectDeviceType,
	}, dispatch);
}

export function mapStateToProps({ deviceTypes, viewState: { selectedDeviceType } }) {
	return { deviceTypes, selectedDeviceType };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceTypes);
