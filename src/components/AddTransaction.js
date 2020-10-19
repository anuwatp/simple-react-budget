import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form } from 'react-bootstrap';
import { GlobalContext, CurrentDate } from '../context/GlobalState';

export function AddTransaction() {
    const [type, setType] = useState('Income');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState();
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        // Simple ID generator
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            type,
            date: CurrentDate(),
            description,
            amount: type === 'Expense' ? - amount : amount && type === 'Debt' ? - amount : amount,
            action: 'Delete'
        }
        addTransaction(newTransaction);
        clearInput();
    };

    // Reset input
    const clearInput = () => {
        setDescription('');
        setAmount({});
    };

    const fromElement = (
        <Form.Row as="form" className="custom-container" autoComplete='off' onSubmit={onSubmit}>
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
                <Form.Control type="number" min='0' name="amount" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} placeholder="Amount" required />
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