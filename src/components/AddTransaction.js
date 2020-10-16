import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';

export function AddTransaction() {
    const [type, setType] = useState('Income');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState();

    const { addTransaction } = useContext(GlobalContext);

    // Date format mm/dd/yyyy
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const onSubmit = e => {
        e.preventDefault();

        // Simple ID generator
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            type,
            date: today,
            description,
            amount: type === 'Expense' ? - amount : amount,
            action: 'Delete'
        }
        addTransaction(newTransaction);

    }

    const fromElement = (
        <Form.Row as="form" className="custom-container">
            {/* Select options */}
            <Col xs={12} md={2}>
                <Form.Control as="select" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Income">Income</option>
                    <option value="Savings">Savings</option>
                    <option value="Expense">Expense</option>
                    <option value="Debt">Debt</option>
                </Form.Control>
            </Col>
            {/* Description field */}
            <Col xs={12} md={6}>
                <Form.Control type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            </Col>
            {/* Amountfield */}
            <Col xs={12} md={2}>
                <Form.Control type="number" name="amount" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} placeholder="Amount" />
            </Col>
            {/* Submit button field */}
            <Col xs={12} md={2}>
                <Button variant="primary" type="submit" onClick={onSubmit}>Submit</Button>
            </Col>
        </Form.Row>
    );

    return (
        <>
            {fromElement}
        </>
    );
}