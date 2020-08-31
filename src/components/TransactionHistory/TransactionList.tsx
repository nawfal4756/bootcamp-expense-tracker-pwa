import React, { useContext } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
import { useStyles } from './TransactionList.styles';
import { GlobalContext } from '../../context/GlobalState';
import cx from 'classnames';

function TransactionList(transaction: {
	description: React.ReactNode;
	amount: React.ReactNode;
	id: number;
	type: string;
}) {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transaction.type === 'income' ? '+' : '-';

	const classes = useStyles();

	return (
		<Card className={cx(transaction.type === 'income' ? classes.positive : classes.negative, classes.list)}>
			<CardContent>
				<Grid container spacing={2} alignItems="center" justify="center">
					<Grid item xs={5} sm={5} md={5}>
						<Typography>{transaction.description}</Typography>
					</Grid>
					<Grid item xs={3} sm={3} md={3}>
						<Typography>
							{sign}${transaction.amount}
						</Typography>
					</Grid>
					<Grid item xs={1} sm={1} md={1}>
						<Button className={classes.btn} onClick={() => deleteTransaction(transaction.id)}>
							x
						</Button>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}

export default TransactionList;
