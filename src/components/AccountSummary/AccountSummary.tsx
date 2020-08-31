import React, { useContext } from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { useStyles } from './AccountSummary.styles';
import { GlobalContext } from '../../context/GlobalState';

const AccountSummary = () => {
	const classes = useStyles();

	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map(
		(transaction: { type: string; amount: React.ReactText }) =>
			transaction.type === 'income' ? transaction.amount : -+transaction.amount
	);

	const income = amounts
		.filter((item: number) => item > 0)
		.reduce((acc: any, item: any) => (acc += item), 0)
		.toFixed(2);

	const expense =
		amounts.filter((item: number) => item < 0).reduce((acc: any, item: any) => (acc += item), 0) *
		-(1.0).toFixed(2);

	return (
		<div className={classes.root}>
			<Grid container spacing={2} justify="center" alignItems="center">
				<Grid item xs={12} sm={12} md={12}>
					<Typography variant="h3" className={classes.text} gutterBottom>
						Account Summary
					</Typography>
				</Grid>
				<Grid item xs={12} sm={9} md={4}>
					<Card raised className={classes.card}>
						<CardContent>
							<Grid container spacing={2} justify="center" alignItems="center">
								<Grid item xs={6} className={classes.style}>
									<Typography className={classes.text}>Income</Typography>
									<Typography className={classes.income}>+${income}</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography className={classes.text}>Expense</Typography>
									<Typography className={classes.expense}>-${expense}</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default AccountSummary;
