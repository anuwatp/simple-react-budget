import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { AlertMessage } from './components/AlertMessage';
import { Header } from './components/Header';
import { AddTransaction } from './components/AddTransaction';
import { PieChart } from './components/PieChart';
import { TotalIncome } from './components/TotalIncome';
import { TotalExpense } from './components/TotalExpense';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Container fluid>
        <Row>
          <div className="col-xl-2">
            <AlertMessage />
          </div>
          <div className="col">
            <div className="overview">
              <Header />
              <AddTransaction />
              <div className="d-flex flex-column flex-lg-row">
                <PieChart />
                <div className="d-flex flex-column flex-sm-row">
                  <TotalIncome />
                  <TotalExpense />
                </div>
              </div>
              <TransactionList />
            </div>
          </div>
        </Row>
      </Container>
    </GlobalProvider>
  );
}

export default App; 
