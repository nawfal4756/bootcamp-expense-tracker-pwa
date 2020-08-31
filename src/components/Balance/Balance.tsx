import React, { useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './Balance.styles';
import { GlobalContext } from '../../context/GlobalState';
import cx from 'classnames'

const Balance = () => {
	const classes = useStyles();

	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map(
		(transaction: any) => (transaction.type === 'income' ? transaction.amount : -+transaction.amount)
	);
	const total = amounts.reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);
	const number : number = Number(total);

	return (
		<div className={classes.root}>
			<Grid container spacing={2} justify="center">
				<Grid item xs={10} sm={10} md={10}>
					<Typography variant="h3" className={classes.text}>
						Balance
					</Typography>
					<Typography className={cx(number >= 0 ? classes.positive : classes.negative, classes.balance)}>
						${total}
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default Balance;
