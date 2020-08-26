import React, { lazy, Suspense } from 'react';
import styles from './App.module.css';
import { Typography, Grid } from '@material-ui/core';

// Import Components
const Header = lazy(() => import('./components/Header/Header'));
const Balance = lazy(() => import('./components/Balance/Balance'));
const TransactionHistory = lazy(() => import('./components/TransactionHistory/TransactionHistory'));
const AddTransaction = lazy(() => import('./components/AddTransaction/AddTransaction'));

function App() {
	return (
		<div className={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Header />
					<Suspense fallback={<Typography>Loading the data... Please Wait!</Typography>}>
						<Balance />
						<TransactionHistory />
						<AddTransaction />
					</Suspense>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
