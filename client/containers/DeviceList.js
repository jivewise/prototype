import { connect } from 'react-redux';
import DeviceList from 'components/DeviceList';
import * as actions from 'actions/viewState';
import { bindActionCreators } from 'redux';


export function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addDevice: actions.addDevice}, dispatch);
}

export function mapStateToProps({ devices }) {
	return { devices };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);
