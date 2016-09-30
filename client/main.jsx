'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import App from 'app';

const showAdmin = window.location.href.indexOf('admin') === -1 ? false : true;
render(<App showAdmin={showAdmin} />, document.getElementById('js-main'));
