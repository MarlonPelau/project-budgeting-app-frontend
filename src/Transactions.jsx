import { useEffect } from "react";

const Transactions = ({transactions, setTransactions, setToggleDetails}) => {
    
  if(transactions.length === 0) return null;

  function handleDelete(id) {
    const options = {
      method: "DELETE",
    };

        fetch(`http://localhost:3300/api/transactions/${id}`, options)
            .then((res) => res.json())
            .then((data) => setTransactions(data.transactions));
    }

return <div>
        <h1>Transactions</h1>
        {transactions.map(({id, item_name, amount, category}) =>
        <div key={id}>
            <h2>Item Name: {item_name}</h2>
            <h3>Amount: {amount}</h3>
            <h4>Category: {category}</h4>
            <Link to={`/${id}`}>
                <button>Details</button>
            </Link>
            <button onClick={() => setToggleDetails({show: true, id})} >Details</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <hr />
        </div>
        )}
        </div>;
};

export default Transactions;