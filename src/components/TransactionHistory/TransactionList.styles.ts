import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	list: {
		boxShadow: '10px 10px 10px grey',
		margin: '2% 0',
		background: 'linear-gradient(225deg, #98eeff, #ffcf98, #edaea8)',
		'&:hover': {
			boxShadow: '20px 20px 20px grey',
			background: 'white'
		}
	},
	btn: {
		border: 'none',
		'&:hover': {
			border: '2px solid black',
			borderRadius: '20px'
		}
	},
	positive: {
		borderRight: '7px solid green'
	},
	negative: {
		borderRight: '7px solid red'
	}
});
