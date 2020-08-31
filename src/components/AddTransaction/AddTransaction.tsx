import React, { useState, useContext } from 'react';
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
import { GlobalContext } from '../../context/GlobalState';

const AddTransaction = () => {
	const { addTransaction } = useContext(GlobalContext);

	const [ type, setType ] = useState('income');
	const [ description, setDescription ] = useState('');
	const [ amount, setAmount ] = useState('0');

	const onSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			type,
			description,
			amount: parseFloat(amount)
		};

		addTransaction(newTransaction);
	};

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container alignItems="center" justify="center" alignContent="center">
				<Grid item xs={12}>
					<Typography variant="h3" className={classes.text}>
						Add Transaction
					</Typography>
				</Grid>
				<form>
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
								required={true}
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
								required={true}
								fullWidth
								className={classes.textbox}
								onChange={(e) => setAmount(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								variant="outlined"
								fullWidth
								className={classes.btn}
								type="submit"
								onClick={onSubmit}
							>
								Add Transaction
							</Button>
						</Grid>
					</FormControl>
				</form>
			</Grid>
		</div>
	);
};

export default AddTransaction;
