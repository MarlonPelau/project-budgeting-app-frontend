import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transactions from "./Transactions";

const TransactionRow = ({ id, transactions }) => {

    // console.log(transactions)

    const [transactionDetails, setTransactionDetails] = useState();

    useEffect(() => {
        fetch(`http://localhost:3300/api/transactions/${id}`)
        .then((res) => res.json())
        .then((data) => setTransactionDetails(data.transaction))
    }, [id]);
    
    if(!transactionDetails) return null;

    return (
        <>
            {/* <h1>Transaction Details</h1> */}
            {/* {transactions && transactions.map(({id, item_name, amount, date}) => {
                return <tr key={id} className="table">
                            <td>{date}</td>
                            <Link to={`/${id}`}>
                                <td>{item_name}</td>
                            </Link>
                            <td>{amount}</td>
                </tr>
            })} */}
           
             <tr key={transactionDetails.id} className="table">
                            <td>{transactionDetails.date}</td>
                           
                                <td>  <Link to={`/${id}`}>{transactionDetails.item_name}</Link></td>
                            
                            <td>{transactionDetails.amount}</td>
                </tr>
        </>
    );
};

export default TransactionRow;