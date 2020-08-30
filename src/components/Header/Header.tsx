import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './Header.styles';

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={12}>
					<Typography variant="h1" className={classes.heading}>
						Expense Tracker
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default Header;
