import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	root: {
		overflow: 'none'
	},
	text: {
		textAlign: 'center'
	},
	textbox: {
		margin: '2% 0'
	},
	btn: {
		background: 'linear-gradient(45deg, red, blue)',
		'&:hover': {
			background: 'white',
			boxShadow: '20px 20px 20px grey',
			borderRadius: '20px'
		}
	}
});
