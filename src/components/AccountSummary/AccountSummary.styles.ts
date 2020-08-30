import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	root: {
		overflow: 'none'
	},
	text: {
		textAlign: 'center'
	},
	card: {
		borderRadius: '40px'
	},
	style: {
		borderRight: '1px black solid'
	},
	income: {
		textAlign: 'center',
		color: 'green'
	},
	expense: {
		textAlign: 'center',
		color: 'red'
	}
});
