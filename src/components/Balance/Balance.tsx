import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './Balance.styles';

const Balance = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={2} justify="center">
				<Grid item xs={10} sm={10} md={10}>
					<Typography variant="h3" className={classes.text}>
						Balance
					</Typography>
					<Typography className={classes.balance}>$BALANCE</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default Balance;
