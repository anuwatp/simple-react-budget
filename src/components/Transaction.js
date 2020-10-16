import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    // Get state
    const { deleteTransaction } = useContext(GlobalContext);
    // If positive number + else -
    const signType = transaction.amount < 0 ? '-' : '+';

    return (
        <tr>
            <td>{transaction.type}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{signType}${numberFormat(Math.abs(transaction.amount))}</td>
            <td className="btn btn-outline-danger btn-block rounded-0" onClick={() => deleteTransaction(transaction.id)}>{transaction.action}</td>
        </tr>
    );
}

// Format numbers if digits > 3
export function numberFormat(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}