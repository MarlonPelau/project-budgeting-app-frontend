import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transactions from "./Transactions";
import { useParams, useNavigate } from "react-router-dom";

const TransactionDetails = ({ transactions }) => {

    // console.log(transactions)
    const navigate = useNavigate();
    const {id} = useParams();
    const [transactionDetail, setTransactionDetail] = useState();

    const handleDelete = (id) => {
        const options = {
                method: "DELETE",
              };
    
        fetch(`http://localhost:3300/api/transactions/${id}`, options)
            .then((res) => res.json())
            .then((data) => setTransactionDetail(data.transactions))
              navigate("/");
    }
    
    useEffect(() => {
        fetch(`http://localhost:3300/api/transactions/${id}`)
        .then((res) => res.json())
        .then((data) => setTransactionDetail(data.transaction))
    }, [id]);
    
    if(!transactionDetail) return null;
    // {
    //     "id": 1,
    //     "item_name": "Deposit",
    //     "amount": 10000,
    //     "date": "January 1",
    //     "from": "Morgan Stanley",
    //     "category": "Bonus"
    // }
    return (
        <>
        <h2>DETAILS</h2>
        <p>Name: {transactionDetail.item_name}</p>
        <p>Amount: {transactionDetail.amount}</p>
        <p>Date: {transactionDetail.date}</p>
        <p>From: {transactionDetail.from}</p>
        <p>Category: {transactionDetail.category}</p>

        <button onClick={() => navigate(`/edit/${id}`)}>EDIT</button>

        <button onClick={() => handleDelete(id)}>DELETE</button>

            {/* <h1>Transaction Details</h1> */}
          
        </>
    );
};

export default TransactionDetails;