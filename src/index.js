import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import lastNames from './temp-base/DataBase.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<App surnames = {lastNames}/>,
	document.getElementById('reactBlock'));

serviceWorker.unregister();

