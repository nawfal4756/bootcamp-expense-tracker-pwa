import React, { createContext, useReducer, ReactNode } from 'react';
import AppReducer from './AppReducer';

const initialState: any = {
	transactions: []
};

export const GlobalContext = createContext(initialState);

type Props = {
	children: ReactNode;
};

export const GlobalProvider = (children: Props) => {
	const [ state, dispatch ] = useReducer(AppReducer, initialState);

	// Actions
	function deleteTransaction(id: any) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
	}

	function addTransaction(transaction: any) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
