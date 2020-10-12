import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

export const Expense = () => {
    return (
        <Col className="custom-container">
            <h4>Expense</h4>
            <h2 className="text-danger">$-200</h2>
        </Col>
    );
}