import React, { useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './TransactionHistory.styles';
import { GlobalContext } from '../../context/GlobalState';
import TransactionList from './TransactionList';

const TransactionHistory = () => {
	const { transactions } = useContext(GlobalContext);

	const classes = useStyles();

	type transactionType = {
		id: number;
		description: string;
		amount: number;
		type: string;
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={2} alignItems="center" justify="center">
				<Grid item xs={12} sm={12} md={12}>
					<Typography variant="h3" className={classes.text}>
						Transaction History
					</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					{transactions.map(({ id, description, amount, type }: transactionType) => {
						return (
							<TransactionList key={id} description={description} amount={amount} id={id} type={type} />
						);
					})}
				</Grid>
			</Grid>
		</div>
	);
};

export default TransactionHistory;
