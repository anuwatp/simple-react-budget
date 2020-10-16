import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form, Row, Col, Pagination } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export function TransactionList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className="custom-container">
            <Row>
                <Col>
                    {/* Option months */}
                    <Form.Control as="select" className="custom-select-month">
                        <option value="January">January</option>
                    </Form.Control>
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
                    {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
                </tbody>
            </Table>
            <div className="d-flex">
                <p className="mr-auto">Showing 1 to 5 of 10</p>
                <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </div>
        </div >
    );
}
