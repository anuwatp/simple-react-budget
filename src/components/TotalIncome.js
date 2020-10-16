import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from '../context/GlobalState';
import { numberFormat } from './Transaction';

export function TotalIncome() {
    // Declare a new state
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
    const available = amounts.reduce((acc, item) => (acc += item), 0);

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
            <h2>$2,000</h2>
        </div>
    );

    return (
        <div className="d-flex flex-column">
            {totIncomeComp}
            {availableComp}
            {savingsComp}
        </div>
    );
}