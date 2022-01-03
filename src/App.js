import React from 'react';
import './App.css';
import InvoiceList from './components/InvoiceList';
import ExpenseTotal from './components/ExpensesTotal';
import { AppProvider } from './context/AppContext';
import Netto from './components/Netto';
import Vat from './components/Vat';
import AddInvoice from './components/AddInvoice';

const App = () => {
  return (
    <AppProvider>
      <div>
      <h1>Bookkeeping App</h1>
      <h3>Total:</h3>
      <div>
        <Netto />
        <Vat />
        <ExpenseTotal />
      </div>
      <div>
        <h3>Invoices:</h3>
        <div>
          <InvoiceList />
        </div>
      </div>
      <div>
        <h3>Add new invoice:</h3>
        <div>
          <AddInvoice />
        </div>
      </div>
    </div>
    </AppProvider> 
  );
};

export default App;
