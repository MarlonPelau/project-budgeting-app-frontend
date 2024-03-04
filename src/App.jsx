import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// 3 components here
import Transactions from "./Transactions";
import TransactionDetails from "./TransactionDetails";
import TransactionForm from "./TransactionForm";

import Navigation from './Navigation';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  // this state purpose to toggle the TransactionDetails component and send the id
  const [toggleDetails, setToggleDetails] = useState({show: false, id: null});
  const [toggleForm, setToggleForm] = useState(false);
  const [edit, setEdit] = useState({show: false, id: null});

  useEffect(() => {
    fetch("http://localhost:3300/api/transactions")
    .then((res) => res.json())
    .then((data) => setTransactions(data.transactions));
  }, []);

  return (
    <div className='container'>
      <Navigation/>
      
      {/* <Link to="/new">
        <button>Create Transaction</button>
      </Link> */}

      <Routes>
        {/* all the transactions/components next up */}
        <Route
          path="/"
          element={
            <Transactions
              setToggleDetails={setToggleDetails}
              transactions={transactions}
              setTransactions={setTransactions}
              edit={edit}
              setEdit={setEdit}
              />
          }
        />
        <Route
          path="/:id"
          element={
            <TransactionDetails 
              toggleDetails={toggleDetails} 
            />
          }
        />
        <Route
        path="/edit/:id"
        element={
          <TransactionForm
          edit={edit}
          setEdit={setEdit}
          setTransactions={setTransactions}
          setToggleForm={setToggleForm}
          />
        }
        />
        <Route
          path="/new"
          element={
            <TransactionForm
              // edit={edit}
              // setEdit={setEdit}
              // setTransactions={setTransactions}
              // setToggleForm={setToggleForm}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App
