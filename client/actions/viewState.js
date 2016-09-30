import { createAction } from 'redux-actions';

export const START_ADD_DEVICE = 'START_ADD_DEVICE';
export const CANCEL_ADD_DEVICE = 'CANCEL_ADD_DEVICE';
export const SELECT_DEVICE = 'SELECT_DEVICE';
export const UNSELECT_DEVICE = 'UNSELECT_DEVICE';

export const SELECT_DEVICE_TYPE = 'SELECT_DEVICE_TYPE';
export const UNSELECT_DEVICE_TYPE = 'UNSELECT_DEVICE_TYPE';

export const START_REQUEST = 'START_REQUEST';
export const END_REQUEST = 'END_REQUEST';

export const addDevice = createAction(START_ADD_DEVICE);
export const cancelAddDevice = createAction(CANCEL_ADD_DEVICE);

export const startRequest = createAction(START_REQUEST);
export const endRequest = createAction(END_REQUEST);

export const selectDevice = createAction(SELECT_DEVICE, (device) => device);
export const unselectDevice = createAction(UNSELECT_DEVICE);
export const selectDeviceType = createAction(SELECT_DEVICE_TYPE, (deviceType) => deviceType);
export const unselectDeviceType = createAction(UNSELECT_DEVICE_TYPE);


