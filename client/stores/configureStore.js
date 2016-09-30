import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [thunkMiddleware];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(INITIAL_STATE) {
	return createStoreWithMiddleware(rootReducer(INITIAL_STATE));
}
