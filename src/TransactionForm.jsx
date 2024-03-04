import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TransactionForm = ({setTransactions, setToggleForm}) => {
    const {id} = useParams()
    const navigate = useNavigate()
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
        .then(() => navigate("/"));
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
                navigate("/");
        }
        })
        .catch((err) => console.log(err));
    }
}
function handleCancel() {
    navigate("/");
    // setImmediate({show: false, id: null});
    // setToggleForm(false);
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
        <div className="mb-3">
            <label htmlFor="item_name">
              Item Name:</label>
              <input 
                onChange={handleChange}
                type="text" 
                id="item_name"
                name="item_name"
                value={transaction.item_name}
              />
            
        </div>
        <div className="mb-3">
            <label htmlFor="amount">
                Amount:</label>
                <input 
                onChange={handleChange}
                type="number"
                id="amount"
                name="amount"
                value={transaction.amount}
              />
        </div>
        <div className="mb-3">
            <label htmlFor="date">
               Date:</label>
               <input 
                onChange={handleChange}
                type="text" 
                id="date"
                name="date"
                value={transaction.date}
              />
        </div>
        <div className="mb-3">
            <label htmlFor="from">
               From:</label>
               <input 
                onChange={handleChange}
                type="text" 
                id="from"
                name="from"
                value={transaction.from}
              />
        </div>
        <div className="mb-3">
            <label htmlFor="category">
              Category:</label>
              <input 
                onChange={handleChange}
                type="text" 
                id="category"
                name="category"
                value={transaction.category}
             />
        </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button className="btn btn-primary" onClick={handleCancel}>Cancel</button>
        </form>
    </div>
  );
};

export default TransactionForm;