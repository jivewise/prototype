import { createAction } from 'redux-actions';

export const ADD_TYPE = 'ADD_TYPE';
export const REMOVE_TYPE = 'REMOVE_TYPE';
export const UPDATE_TYPE = 'UPDATE_TYPE';

export const addType = createAction(ADD_TYPE, (type) => type);
export const updateType = createAction(UPDATE_TYPE, (type) => type);
export const removeType = createAction(REMOVE_TYPE, (id) => id);
