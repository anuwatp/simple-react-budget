import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

export const TotalBalance = () => {
    return (
        <Col className="custom-container">
            <h3>Your balance</h3>
            <h1>$5,000</h1>
        </Col>
    );
}