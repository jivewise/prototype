import * as C from 'actions/type';
import { v4 } from 'node-uuid';

export const INITIAL_STATE = [{
	id: '1',
	name: 'Samsung Audio',
	controls: [{
		type: 'button',
		name: 'Power',
	}, {
		type: 'slider',
		name: 'Volume',
	}, {
		type: 'select',
		name: 'Playlist',
		options: ['Playlist 1', 'Playlist 2']
	}]
}, {
	id: '2',
	name: 'Sony Audio',
	controls: [{
		type: 'button',
		name: 'Power',
	}, {
		type: 'slider',
		name: 'Volume',
	}, {
		type: 'select',
		name: 'Playlist',
		options: ['Playlist 3', 'Playlist 4']
	}]
}, {
	id: '3',
	name: 'Apple TV',
	controls: [{
		type: 'button',
		name: 'Power',
	}, {
		type: 'slider',
		name: 'Volume',
	}, {
		type: 'slider',
		name: 'Brightness',
	}]
}, {
	id: '4',
	name: 'Citrus Lights',
	controls: [{
		type: 'button',
		name: 'On/off',
		action: 'POST http://automation­prototype.herokuapp.com/citrus­light/power',
	}]
}];

function getTypeIndex(types, typeId) {
	return types.findIndex((type) => type.id === typeId);
}

export function createDeviceTypesReducer({ deviceTypes }) {
	const init = deviceTypes ? deviceTypes : INITIAL_STATE;
	return function deviceTypesReducer(state = init, action) {
		switch (action.type) {
			case C.UPDATE_TYPE: {
				const index = getTypeIndex(state, action.payload.id);
				return [
					...state.slice(0, index),
					action.payload,
					...state.slice(index+1)
				];
			}
			case C.ADD_TYPE: {
				return [
					...state,
					{
						...action.payload,
						id: v4(),
					}
				];
			}
			case C.REMOVE_TYPE: {
				const index = getTypeIndex(state, action.payload);
				console.log(index);
				return [
					...state.slice(0, index),
					...state.slice(index+1)
				];
			}
			default:
				return state;
		}
	};
}
