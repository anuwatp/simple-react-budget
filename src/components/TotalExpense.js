import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

export const TotalExpense = () => {
    return (
        <Col className="custom-container">
            <h3>Total expense</h3>
            <h1 className="text-danger">$-700</h1>
        </Col>
    );
}