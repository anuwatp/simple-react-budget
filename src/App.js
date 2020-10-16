import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { AddTransaction } from './components/AddTransaction';
import PieChart from './components/PieChart';
import { TotalIncome } from './components/TotalIncome';
import { TotalExpense } from './components/TotalExpense';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Container>
        <Header />
        <AddTransaction />
        <div className="d-flex flex-column flex-md-row">
          <PieChart />
          <TotalIncome />
          <TotalExpense />
        </div>
        <TransactionList />
      </Container>
    </GlobalProvider>
  );
}

export default App; 
