import React, { useState } from 'react';
import {
	Grid,
	Typography,
	RadioGroup,
	FormControlLabel,
	Radio,
	TextField,
	Button,
	FormControl
} from '@material-ui/core';
import { useStyles } from './AddTransaction.styles';

const AddTransaction = () => {
	const [ type, setType ] = useState('income');
	const [ description, setDescription ] = useState('');
	const [ amount, setAmount ] = useState(0);

	console.log(description);
	console.log(amount);

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container alignItems="center" justify="center" alignContent="center">
				<Grid item xs={12}>
					<Typography variant="h3" className={classes.text}>
						Add Transaction
					</Typography>
				</Grid>
				<FormControl>
					<Grid item xs={12}>
						<Typography id="radio" className={classes.text}>
							Type of Transaction
						</Typography>
						<RadioGroup
							aria-label="typeOfTransaction"
							aria-labelledby="radio"
							name="tot"
							value={type}
							onChange={(e) => setType(e.target.value)}
							row
						>
							<FormControlLabel value="income" control={<Radio />} label="Income" />
							<FormControlLabel value="expense" control={<Radio />} label="Expense" />
						</RadioGroup>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Description"
							type="text"
							required
							fullWidth
							className={classes.textbox}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Amount"
							type="number"
							required
							fullWidth
							className={classes.textbox}
							onChange={(e) => setAmount(Number(e.target.value))}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button variant="outlined" fullWidth className={classes.btn}>
							Add Transaction
						</Button>
					</Grid>
				</FormControl>
			</Grid>
		</div>
	);
};

export default AddTransaction;
