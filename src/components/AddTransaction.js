import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Col,
    Form
} from 'react-bootstrap';

export const AddTransaction = () => {
    return (
        <Form.Row className="custom-container">
            <Col xs={12} md={2}>
                {/* Option */}
                <Form.Control as="select">
                    <option value="Income">Income</option>
                    <option value="Savings">Savings</option>
                    <option value="Expense">Expense</option>
                    <option value="Debt">Debt</option>
                </Form.Control>
            </Col>
            <Col xs={12} md={5}>
                {/* Description input */}
                <Form.Control type="text" name="description" placeholder="Description" />
            </Col>
            <Col xs={12} md={3}>
                {/* Value input */}
                <Form.Control type="number" name="amount" placeholder="Amount" />
            </Col>
            <Col xs={12} md={2}>
                {/* Submit button */}
                <Button variant="primary" type="submit">Submit</Button>
            </Col>
        </Form.Row>
    );
}