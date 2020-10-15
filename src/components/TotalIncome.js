import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function TotalIncome() {
    // Declare a new state
    const [income, setIncome] = useState(5000);

    const totIncome = (
        <div className="custom-container">
            <h3>Total income</h3>
            <h1>${income}</h1>
        </div>
    );

    const available = (
        <div className="custom-container">
            <h4>Available</h4>
            <h2>$2,300</h2>
        </div>
    );

    const savings = (
        <div className="custom-container">
            <h4>Savings</h4>
            <h2>$2,000</h2>
        </div>
    );

    return (
        <div className="d-flex flex-column">
            {totIncome}
            {available}
            {savings}
        </div>
    );
}