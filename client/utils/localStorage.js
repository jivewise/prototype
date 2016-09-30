export function getStorage() {
	return window.localStorage ? window.localStorage : {
		getItem: function() { },
		setItem: function() { },
	};
}

export function loadState(storage) {
	const serial = storage.getItem('state');
	return JSON.parse(serial);
}

export function saveState(state, storage) {
	const serial = JSON.stringify(state);
	storage.setItem('state', serial);
}
