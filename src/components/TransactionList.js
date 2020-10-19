import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col, Pagination } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export function TransactionList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className="custom-container">
            <Row>
                <Col className="text-center mb-4">
                    <h1>History</h1>
                </Col>
            </Row>
            {/* Transaction list */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                </tbody>
            </Table>
        </div >
    );
}
