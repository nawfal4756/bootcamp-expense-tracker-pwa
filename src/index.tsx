import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import swDev from './swDev';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Theme.styles';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// serviceWorker.register();
swDev();
