import * as C from 'actions/device';
import { v4 } from 'node-uuid';

export const INITIAL_STATE = [{
	id: '1',
	name: 'Bedroom Apple TV',
	typeId: '3',
	ip: '192.168.1.2',
	values: {
		'Volume': '50',
	}
}, {
	id: '2',
	name: 'Livingroom Player',
	typeId: '1',
	ip: '192.168.1.2',
	values: {
		'Playlist': 'Playlist 2',
		'Volume': '30',
	}
}, {
	id: '3',
	name: 'Livingroom Lights',
	typeId: '4',
	ip: '192.168.1.2',
	values: { }
}];

export const INITIAL_DEVICE_STATE = {
	id: '',
	name: '',
	typeId: '',
	values: {}
}

export function deviceReducer(state = INITIAL_DEVICE_STATE, action) {
	const { payload } = action;
	if (!state || state.id != payload.id) {
		return state;
	}

	switch (action.type) {
		case C.ADJUST_CONTROL: {
			const { controlName, controlValue } = payload;
			let values = { ...state.values };
			values[controlName] = controlValue;
			const newState = {
				...state,
				values
			};
			return newState;
		}
		default:
			return state;
	}
}

export function createDevicesReducer({ devices }) {
	const init = devices ? devices : INITIAL_STATE;
	return function devicesReducer(state = init, action) {
		const { payload } = action;
		switch (action.type) {
			case C.ADJUST_CONTROL: {
				return state.map((device) => deviceReducer(device, action));
			}
			case C.SAVE_NEW_DEVICE: {
				return state.concat({
					name: payload.deviceName,
					typeId: payload.deviceType,
					ip: payload.deviceIP,
					id: v4(),
					values: { }
				});
			}
			case C.REMOVE_DEVICE: {
				return state.filter((device) => device.id !== payload);
			}
			default:
				return state;
		}
	};
}
