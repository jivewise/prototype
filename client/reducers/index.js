import { combineReducers } from 'redux';
import { createViewStateReducer } from './viewStateReducer';
import { createDevicesReducer } from './devicesReducer';
import { createDeviceTypesReducer } from './deviceTypesReducer';
import { reducer as formReducer } from 'redux-form'

export default function createRootReducer(initialState) {
	return combineReducers({
		viewState: createViewStateReducer(),
		devices: createDevicesReducer(initialState),
		deviceTypes: createDeviceTypesReducer(initialState),
		form: formReducer,
	});
}
