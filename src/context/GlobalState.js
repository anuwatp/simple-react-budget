import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
        { id: 1, type: 'Income', date: '10/15/2020', description: 'Lorem ipsum', amount: 5000, action: 'Delete' },
        // {id: 1, type: 'Savings', date: '10/15/2020', description: 'Lorem ipsum', amount: -2000, action: 'Delete' },
        // {id: 1, type: 'Debt', date: '10/15/2020', description: 'Lorem ipsum', amount: -1000, action: 'Delete' },
        { id: 2, type: 'Expense', date: '10/15/2020', description: 'Lorem ipsum', amount: -500, action: 'Delete' },
        { id: 3, type: 'Expense', date: '10/15/2020', description: 'Lorem ipsum', amount: -500, action: 'Delete' }
    ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Create provider - so other components can access states
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
};