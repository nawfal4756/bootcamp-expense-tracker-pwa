import React from 'react';
import { Grid, Typography, Card, CardContent, Button } from '@material-ui/core';
import { useStyles } from './TransactionHistory.styles';

const TransactionHistory = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={2} alignItems="center" justify="center">
				<Grid item xs={12} sm={12} md={12}>
					<Typography variant="h3" className={classes.text}>
						Transaction History
					</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Card className={classes.list}>
						<CardContent>
							<Grid container spacing={2} alignItems="center" justify="center">
								<Grid item xs={5} sm={5} md={5}>
									<Typography>DESCRIPTION</Typography>
								</Grid>
								<Grid item xs={3} sm={3} md={3}>
									<Typography>$1234</Typography>
								</Grid>
								<Grid item xs={1} sm={1} md={1}>
									<Button className={classes.btn}>x</Button>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default TransactionHistory;
