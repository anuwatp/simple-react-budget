import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form, Row, Col, Pagination } from 'react-bootstrap';

export function TransactionList() {
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
                        <th>#</th>
                        <th>Account</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Income</td>
                        <td>10.12.2020</td>
                        <td>Lorem ipsum</td>
                        <td>5,000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Expense</td>
                        <td>10.12.2020</td>
                        <td>Lorem ipsum</td>
                        <td>-500</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Savings</td>
                        <td>10.12.2020</td>
                        <td>Lorem ipsum</td>
                        <td>$2,000</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Debt</td>
                        <td>10.12.2020</td>
                        <td>Lorem ipsum</td>
                        <td>$-250</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Debt</td>
                        <td>10.12.2020</td>
                        <td>Lorem ipsum</td>
                        <td>$-250</td>
                    </tr>
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
        </div>
    );
}
