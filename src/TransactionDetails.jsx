import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transactions from "./Transactions";
import { useParams } from "react-router-dom";

const TransactionDetails = () => {
    const {id} = useParams();
    const {transactionDetail, setTransactionDetail} = useState();

    useEffect(() => {
        fetch(`http://localhost:3300/api/transactions/${id}`)
        .then((res) => res.json())
        .then((data) => setTransactionDetail(data.transaction))
    }, [id]);
    if(transactionDetail) return null;

    return (
        <div>
            <h1>TransactionDetails</h1>
            <p>{transactionDetail.item_name}</p>
            <p>{transactionDetail.amount}</p>
            <p>{transactionDetail.category}</p>
        </div>
    );
};

export default TransactionDetails;