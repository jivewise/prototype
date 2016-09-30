import { createAction } from 'redux-actions';
import * as viewState from './viewState';

import request from 'superagent';
import debounce from 'lodash/debounce';
import partial from 'lodash/partial';

export const ADJUST_CONTROL = 'ADJUST_CONTROL';
export const SAVE_NEW_DEVICE = 'SAVE_NEW_DEVICE';
export const REMOVE_DEVICE = 'REMOVE_DEVICE';

export const adjustControl = createAction(ADJUST_CONTROL, (id, controlName, controlValue) => ({
	id, controlName, controlValue
}));

export const saveNewDevice = createAction(SAVE_NEW_DEVICE, (values) => values);
export const removeDevice = createAction(REMOVE_DEVICE, (id) => id);

export const handleResponse = (dispatch, retry, err, response) => {
	//only retry if there's a 500, since they're infrequent
	//we don't want to get into an infinite loop with the 403s and rate limiting
	if (err && err.status === 500 && retry) {
		const data = err.response.req._data;
		const noRetryHandle = partial(handleResponse, dispatch, false);
		return throttledRequest(data, noRetryHandle);
	}

	//just hide the spinner, we either got a response, or we need to wait
	dispatch(viewState.endRequest());
}

//route the api call through our express server, in case api server has CORS disabled
export const makeApiRequest = (data, handleResponse) => (
	request
		.post('/api')
		.send(data)
		.end(handleResponse)
);

//throttle request so we don't send it too often, since there's rate limiting involved
const throttledRequest = debounce(makeApiRequest, 500);

export const callApi = (apiAction, value) => {
	const [method, url] = apiAction.split(" ");
	return (dispatch) => {
		dispatch(viewState.startRequest());
		const handleResponseWithRetry = partial(handleResponse, dispatch, true);
		throttledRequest({ method, url, value }, handleResponseWithRetry);
	};
};
