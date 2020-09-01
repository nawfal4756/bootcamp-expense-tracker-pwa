import React, { lazy, Suspense } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useStyles } from './App.styles';
import { GlobalProvider } from './context/GlobalState';
import firebase from 'firebase';

// Import Components
const Header = lazy(() => import('./components/Header/Header'));
const Balance = lazy(() => import('./components/Balance/Balance'));
const AccountSummary = lazy(() => import('./components/AccountSummary/AccountSummary'));
const TransactionHistory = lazy(() => import('./components/TransactionHistory/TransactionHistory'));
const AddTransaction = lazy(() => import('./components/AddTransaction/AddTransaction'));

function App() {
	const classes = useStyles();

	const messaging = firebase.messaging();
	messaging
		.requestPermission()
		.then(() => {
			return messaging.getToken();
		})
		.then((token: string | undefined) => {
			console.log('token', token);			
		});

	return (
		<GlobalProvider>
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={12} className={classes.container}>
						<Suspense fallback={<Typography>Loading the data... Please Wait!</Typography>}>
							<Header />
							<Balance />
							<AccountSummary />
							<TransactionHistory />
							<AddTransaction />
						</Suspense>
					</Grid>
				</Grid>
			</div>
		</GlobalProvider>
	);
}

export default App;
