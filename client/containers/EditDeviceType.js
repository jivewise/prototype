import { connect } from 'react-redux';
import EditDeviceType from 'components/EditDeviceType';
import * as viewActions from 'actions/viewState';
import * as typeActions from 'actions/type';
import { bindActionCreators } from 'redux';

export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		goBack: viewActions.unselectDeviceType,
		updateDeviceType: typeActions.updateType,
		addDeviceType: typeActions.addType,
		removeDeviceType: typeActions.removeType,
	}, dispatch);
}

export function mapStateToProps({ viewState: { selectedDeviceType } }) {
	return { type: selectedDeviceType };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDeviceType);
