import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as r from 'react-bootstrap';
import { FiRefreshCcw } from 'react-icons/fi';
import { Pie } from 'react-chartjs-2';
import { GlobalContext, getCurrentDate } from '../context/GlobalState';

export const PieChart = () => {
    // Assign state
    const [chartData, setChartData] = useState({});
    // Get state
    const { transactions } = useContext(GlobalContext);
    // Get available amount
    const availableAmounts = transactions.map(transaction => transaction.type === 'Savings' ? - transaction.amount : transaction.amount);
    const availableResult = availableAmounts.reduce((acc, item) => (acc += item), 0);
    // Get savings amount
    const savingsAmounts = transactions.map(transaction => transaction.type === 'Savings' ? transaction.amount : null);
    const savingsResult = savingsAmounts.reduce((acc, item) => (acc += item), 0);
    // Get expense amount
    const expenseAmounts = transactions.map(transaction => transaction.type === 'Expense' ? transaction.amount : null);
    const expenseResult = expenseAmounts.reduce((acc, item) => (acc += item), 0);
    // Get debt amount
    const debtAmounts = transactions.map(transaction => transaction.type === 'Debt' ? transaction.amount : null);
    const debtResult = debtAmounts.reduce((acc, item) => (acc += item), 0);

    // Save data in an object
    let transactionData = {
        available: [],
        savings: [],
        expense: [],
        debt: []
    }
    // Push data to chartAmountData object
    transactionData.available.push(availableResult);
    transactionData.savings.push(savingsResult);
    transactionData.expense.push(expenseResult);
    transactionData.debt.push(debtResult);

    // Chart config
    let chartConfig = () => {
        setChartData({
            labels: ['Available', 'Savings', 'Expenses', 'Debts'],
            datasets: [
                {
                    data: [transactionData.available, transactionData.savings, transactionData.expense, transactionData.debt],
                    backgroundColor: ['lightgreen', 'MediumSlateBlue', 'red', 'brown']
                }
            ],
            options: {
                responsive: true,
                title: { text: getCurrentDate(), display: true, fontSize: 40 }
            }
        });
    };
    console.log(chartData);

    const updateChart = () => {
        setChartData({
            datasets: [
                {
                    data: [transactionData.available, transactionData.savings, transactionData.expense, transactionData.debt]
                }
            ]
        });
    };

    // Tell component to do something after render
    useEffect(() => {
        chartConfig();
    }, []);

    return (
        <div className="custom-container flex-fill">
            <r.OverlayTrigger overlay={<r.Tooltip id="tooltip-disabled">Refresh chart</r.Tooltip>}>
                <span className="d-inline-block btnRefresh" onClick={() => updateChart()}>
                    <FiRefreshCcw />
                </span>
            </r.OverlayTrigger>
            <Pie data={chartData} options={chartData.options} />
        </div>
    );
}