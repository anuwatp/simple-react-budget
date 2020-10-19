import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

export const CurrentDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    // Return date format  mm/dd/yyyy
    return today = mm + '/' + dd + '/' + yyyy;
};

export const getCurrentDate = () => {
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        let today = new Date();
        const mm = months[today.getMonth()]
        const yyyy = today.getFullYear();
        // Return date format i.e January 2020
    return today = mm + ' ' + yyyy;
};

// Initial state
const initialState = {
    transactions: [
        { id: 1, type: 'Income', date: CurrentDate(), description: 'Lorem ipsum', amount: 5000, action: 'Delete' },
        { id: 2, type: 'Savings', date: CurrentDate(), description: 'Lorem ipsum', amount: 2000, action: 'Delete' },
        { id: 3, type: 'Expense', date: CurrentDate(), description: 'Lorem ipsum', amount: -500, action: 'Delete' },
        { id: 4, type: 'Debt', date: CurrentDate(), description: 'Lorem ipsum', amount: -1000, action: 'Delete' }
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