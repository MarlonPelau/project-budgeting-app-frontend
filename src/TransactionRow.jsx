import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transactions from "./Transactions";
import { useParams } from "react-router-dom";

const TransactionDetails = ({ transactions }) => {

    console.log(transactions)

    const {id} = useParams();
    const [transactionDetail, setTransactionDetials] = useState();

    useEffect(() => {
        fetch(`http://localhost:3300/api/transactions/${id}`)
        .then((res) => res.json())
        .then((data) => setTransactionDetials(data))
    }, [id]);
    
    if(!transactionDetail) return null;

    return (
        <>
            {/* <h1>Transaction Details</h1> */}
            {transactions && transactions.map(({id, item_name, amount, date}) => {
                return <tr key={id} className="table">
                            <td>{date}</td>
                            <Link to={`/${id}`}>
                                <td>{item_name}</td>
                            </Link>
                            <td>{amount}</td>
                </tr>
            })}
        </>
    );
};

export default TransactionDetails;