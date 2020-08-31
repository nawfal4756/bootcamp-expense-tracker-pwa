import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	root: {
		overflow: 'none'
	},
	balance: {
		fontWeight: 'bold',
		marginTop: '1%',
		fontSize: '50px',
		textAlign: 'center'
	},
	text: {
		textAlign: 'center'
	},
	positive: {
		color: 'green'
	},
	negative: {
		color: 'red'
	}
});
