'use strict';

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'stores/configureStore';
import createRootReducer from 'reducers';
import UserDevices from 'containers/UserDevices';
import DeviceTypes from 'containers/DeviceTypes';
import * as ls from 'utils/localStorage';
import * as styles from 'components/styles';
import classnames from 'classnames';

const initialState = ls.loadState(ls.getStorage());
const store = configureStore(initialState ? initialState : {});
store.subscribe(() => {
	ls.saveState({
		devices: store.getState().devices,
		deviceTypes: store.getState().deviceTypes,
	}, ls.getStorage());
});

class App extends Component {
	static propTypes: {
		showAdmin: PropTypes.bool
	}

	render() {
		const { showAdmin } = this.props;

		const appStyle = classnames({
			[styles.adminApp]: showAdmin,
		});

		return (
			<div className={appStyle}>
				<Provider store={store}>
					<div className={styles.deviceTypes}>
						<DeviceTypes show={showAdmin} />
					</div>
				</Provider>
				<Provider store={store}>
					<div className={styles.userDevices}>
						<UserDevices />
					</div>
				</Provider>
			</div>
		);
	}
}

export default App;
