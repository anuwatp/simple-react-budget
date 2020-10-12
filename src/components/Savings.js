import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Col } from 'react-bootstrap';

export const Savings = () => {
    return (
        <Col className="custom-container">
            <h4>Savings</h4>
            <div className="d-flex">
                <h2>$2,000</h2>
                <p className="mt-3 ml-1">
                    <span className="text-success">
                        <AiOutlineArrowUp />1.3%
                    </span> since last month
                </p>
            </div>
        </Col>
    );
}