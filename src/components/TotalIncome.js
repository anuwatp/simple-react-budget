import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from '../context/GlobalState';
import { numberFormat } from './Transaction';

export function TotalIncome() {
    // Declare a new state
    const { transactions } = useContext(GlobalContext);
    // Get income amount
    const incomeAmounts = transactions.map(transaction => transaction.type === 'Income' ? transaction.amount : 0);
    const income = incomeAmounts.reduce((acc, item) => acc += item, 0);
    // Get available amount
    const amounts = transactions.map(transaction => transaction.type === 'Savings' ? - transaction.amount : transaction.amount);
    const available = amounts.reduce((acc, item) => (acc += item), 0);
    // Get savings amount
    const savingAmounts = transactions.map(transaction => transaction.type === 'Savings' ? transaction.amount : 0);
    const savings = savingAmounts.reduce((acc, item) => acc += item, 0);

    const totIncomeComp = (
        <div className="custom-container">
            <h3>Total income</h3>
            <h1>${numberFormat(income)}</h1>
        </div>
    );
 
    const availableComp = (
        <div className="custom-container">
            <h4>Available</h4>
            <h2 className={available >= 0 ? '' : 'text-danger'}>${numberFormat(available)}</h2>
        </div>
    );

    const savingsComp = (
        <div className="custom-container">
            <h4>Savings</h4>
    <h2>${numberFormat(savings)}</h2>
        </div>
    );

    return (
        <div className="flex-fill">
            {totIncomeComp}
            {availableComp}
            {savingsComp}
        </div>
    );
}