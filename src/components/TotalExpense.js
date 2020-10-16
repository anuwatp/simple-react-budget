import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from '../context/GlobalState';
import { numberFormat } from './Transaction';

export function TotalExpense() {
    // Declare a new state
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0);

    const totExpElement = (
        <div className="custom-container">
            <h3>Total expense</h3>
            <h1 className="text-danger">${numberFormat(Math.abs(expense))}</h1>
        </div>
    );
    const expElement = (
        <div className="custom-container">
            <h4>Expense</h4>
            <h2 className="text-danger">${numberFormat(Math.abs(expense))}</h2>
        </div>
    );
    const debtElement = (
        <div className="custom-container">
            <h4>Debt</h4>
            <h2 className="text-danger">$500</h2>
        </div>
    );
    return (
        <div className="d-flex flex-column">
            {totExpElement}
            {expElement}
            {debtElement}
        </div>
    );
}