import React from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { useStyles } from './AccountSummary.styles';

const AccountSummary = () => {
	const classes = useStyles();

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
									<Typography className={classes.income}>+$1234</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography className={classes.text}>Expense</Typography>
									<Typography className={classes.expense}>+$1234</Typography>
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
