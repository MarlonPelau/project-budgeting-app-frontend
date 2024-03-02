import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const TransactionForm = ({setTransactions, setToggleForm}) => {
    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: "",
        date: "",
        from: "",
        category: "",
    });

    function handleChange(e) {
        setTransaction ({...transaction, [e.target.id]: e.target.value});

    }

function handleSubmit(e) {
    e.preventDefault();

    if (id) {
        const options = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(transaction),
        };

        fetch(`http://localhost:3300/api/transactions/${id}`, options)
        .then((res) => res.json())
        .then((data) => setTransactions(data.transactions))
        .then(() => Navigate("./"));
    } else {
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(transaction),
        };
        fetch("http://localhost:3300/api/transactions", options)
        .then((res) => res.json())
        .then((data) => {
            if (data.message) alert("All Inputs Must Be Filled")
            else {
                setTransactions(data.transactions);
                Navigate("./");
        }
        })
        .catch((err) => console.log(err));
    }
}
function handleCancel() {
    setImmediate({show: false, id: null});
    setToggleForm(false);
}

useEffect(() => {
    if (id) {
        fetch(`http://localhost:3300/api/transactions/${id}`)
        .then((res) => res.json())
        .then((data) => setTransaction(data.transaction));
    }
}, [id]);

return (
    <div>
        <h1>Transaction Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="item_name">
              Item Name:
              <input 
                onChange={handleChange}
                type="text" 
                id="item_name"
                name="item_name"
                value={transaction.item_name}
              />
            </label>
            <label htmlFor="amount">
                Amount:
                <input 
                onChange={handleChange}
                type="text" 
                id="amount"
                name="amount"
                value={transaction.amount}
              />
            </label>
            <label htmlFor="from">
               From:
               <input 
                onChange={handleChange}
                type="text" 
                id="from"
                name="from"
                value={transaction.from}
              />
              </label>
              <label htmlFor="category">
              Category:
              <input 
                onChange={handleChange}
                type="text" 
                id="category"
                name="category"
                value={transaction.category}
             />
            </label>
            <button>Submit</button>
        </form>
        <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default TransactionForm;