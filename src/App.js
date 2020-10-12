import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { AddTransaction } from './components/AddTransaction';
import PieChart from './components/PieChart';
import { TotalBalance } from './components/TotalBalance';
import { TotalExpense } from './components/TotalExpense';
import { Available } from './components/Available';
import { Expense } from './components/Expense';
import { Savings } from './components/Savings';
import { Debt } from './components/Debt';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <Container>
      <h1 className="mt-5 mb-3 mx-0">Welcome! Try add a transaction</h1>
      <AddTransaction />
      <Row className="m-0">
        {/* Display Pie Chart */}
        <PieChart />
        {/* Overview */}
        <Col xs={12} md={6}>
          <Row>
            <TotalBalance />
            <TotalExpense />
          </Row>
          <Row>
            <Available />
            <Expense />
          </Row>
          <Row>
            <Savings />
            <Debt />
          </Row>
        </Col>
      </Row>
      <TransactionList />
    </Container>
  );
}

export default App; 
