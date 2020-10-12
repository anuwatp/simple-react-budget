import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

export const Debt = () => {
    return (
        <Col className="custom-container">
            <h4>Debt</h4>
            <h2 className="text-danger">$-500</h2>
        </Col>
    );
}