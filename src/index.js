import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import lastNames from './DataBase.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<App surnames = {lastNames}/>,
	document.getElementById('reactBlock'));

serviceWorker.unregister();

