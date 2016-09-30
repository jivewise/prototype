import * as C from 'actions/viewState';
import * as deviceActions from 'actions/device';
import * as typeActions from 'actions/type';

export const INITIAL_STATE = {
	selectedDevice: null,
	isAddingDevice: false,
	selectedDeviceType: null,
	isBusy: false,
};

export function createViewStateReducer() {
	return function viewStateReducer(state = INITIAL_STATE, action) {
		switch (action.type) {
			case C.SELECT_DEVICE: {
				const device = action.payload;

				return {
					...state,
					selectedDevice: device,
				};
			}
			case C.START_REQUEST: {
				return {
					...state,
					isBusy: true,
				};
			}
			case C.END_REQUEST: {
				return {
					...state,
					isBusy: false,
				};
			}
			case C.UNSELECT_DEVICE: {
				return {
					...state,
					selectedDevice: null,
				};
			}
			case C.SELECT_DEVICE_TYPE: {
				return {
					...state,
					selectedDeviceType: action.payload,
				};
			}
			case C.UNSELECT_DEVICE_TYPE: {
				return {
					...state,
					selectedDeviceType: null,
				};
			}
			case C.START_ADD_DEVICE: {
				return {
					...state,
					isAddingDevice: true,
				};
			}
			case C.CANCEL_ADD_DEVICE:
			case deviceActions.SAVE_NEW_DEVICE: {
				return {
					...state,
					isAddingDevice: false,
				};
			}
			case deviceActions.REMOVE_DEVICE: {
				return {
					...state,
					selectedDevice: null,
				}
			}
			case typeActions.ADD_TYPE:
			case typeActions.UPDATE_TYPE:
			case typeActions.REMOVE_TYPE: {
				return {
					...state,
					selectedDeviceType: null,
				}
			}
			default:
				return state;
		}
	};
}
