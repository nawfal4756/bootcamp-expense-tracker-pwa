import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	root: {
		margin: '3% 0',
		overflow: 'none'
	},
	list: {
		boxShadow: '10px 10px 10px grey',
		background: 'linear-gradient(225deg, #98eeff, #ffcf98, #edaea8)',
		'&:hover': {
			boxShadow: '20px 20px 20px grey',
			background: 'white'
		}
	},
	text: {
		textAlign: 'center'
	},
	btn: {
		border: 'none',
		'&:hover': {
			border: '2px solid black',
			borderRadius: '20px'
		}
	}
});
