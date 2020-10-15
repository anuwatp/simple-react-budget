import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function TotalExpense () {
    const totExpElement = (
        <div className="custom-container">
            <h3>Total expense</h3>
            <h1 className="text-danger">-$700</h1>
        </div>
    );
    const expElement = (
        <div className="custom-container">
            <h4>Expense</h4>
            <h2 className="text-danger">-$200</h2>
        </div>
    );
    const debtElement = (
        <div className="custom-container">
            <h4>Debt</h4>
            <h2 className="text-danger">-$500</h2>
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