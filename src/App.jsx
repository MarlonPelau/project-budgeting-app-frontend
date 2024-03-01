import { useState } from 'react';

// 3 components here
import Transactions from "./Transactions";
import TransactionDetails from "./TransactionDetails";
import TransactionForm from "./TransactionForm";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  // this state purpose to toggle the TransactionDetails component and send the id
  const [toggleDetails, setToggleDetails] = useState({show: false, id: null});
  
  return <div>Budgtr</div>
}

export default App
