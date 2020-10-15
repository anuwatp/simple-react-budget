import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form } from 'react-bootstrap';

export function AddTransaction() {
    const fromElement = (
        <Form.Row className="custom-container">
            {/* Select options */}
            <Col xs={12} md={2}>
                <Form.Control as="select">
                    <option value="Income">Income</option>
                    <option value="Savings">Savings</option>
                    <option value="Expense">Expense</option>
                    <option value="Debt">Debt</option>
                </Form.Control>
            </Col>
            {/* Description field */}
            <Col xs={12} md={6}>
                <Form.Control type="text" name="description" placeholder="Description" />
            </Col>
            {/* Amountfield */}
            <Col xs={12} md={2}>
                <Form.Control type="number" name="amount" placeholder="Amount" />
            </Col>
            {/* Submit button field */}
            <Col xs={12} md={2}>
                <Button variant="primary" type="submit">Submit</Button>
            </Col>
        </Form.Row>
    );

    return (
        <>
            {fromElement}
        </>
    );
}