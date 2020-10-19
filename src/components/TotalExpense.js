import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from '../context/GlobalState';
import { numberFormat } from './Transaction';

export function TotalExpense() {
    // Declare a new state
    const { transactions } = useContext(GlobalContext);
    // Get total expense amount
    const amounts = transactions.map(transaction => transaction.amount);
    const totalExpense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0);
    // Get expense amount
    const expenseAmounts = transactions.map(transaction => transaction.type === 'Expense' ? transaction.amount : 0);
    const expenseResult = expenseAmounts.reduce((acc, item) => (acc += item), 0);
    // Get debt amount
    const debtAmounts = transactions.map(transaction => transaction.type === 'Debt' ? transaction.amount : 0);
    const debtResult = debtAmounts.reduce((acc, item) => (acc += item), 0);

    const totExpElement = (
        <div className="custom-container">
            <h3>Total expense</h3>
            <h1 className="text-danger">${numberFormat(Math.abs(totalExpense))}</h1>
        </div>
    );
    const expElement = (
        <div className="custom-container">
            <h4>Expense</h4>
            <h2 className="text-danger">${numberFormat(Math.abs(expenseResult))}</h2>
        </div>
    );
    const debtElement = (
        <div className="custom-container">
            <h4>Debt</h4>
            <h2 className="text-danger">${numberFormat(Math.abs(debtResult))}</h2>
        </div>
    );
    return (
        <div className="flex-fill">
            {totExpElement}
            {expElement}
            {debtElement}
        </div>
    );
}