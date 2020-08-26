import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './Header.styles';

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Grid container spacing={2}>
				<Typography>Header</Typography>
			</Grid>
		</div>
	);
};

export default Header;
