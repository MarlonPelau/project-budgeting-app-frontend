import TransactionRow from "./TransactionRow";

const Transactions = ({transactions, setTransactions, setToggleDetails}) => {
    
  if(transactions.length === 0) return null;

  // function handleDelete(id) {
  //   const options = {
  //     method: "DELETE",
  //   };

  //       fetch(`http://localhost:3300/api/transactions/${id}`, options)
  //           .then((res) => res.json())
  //           .then((data) => setTransactions(data.transactions));
  //   }

return <table>
        <tbody>
        {transactions && transactions.map(({id, item_name, amount, category}) =>
        
            <TransactionRow 
                key={id}
                transactions={transactions}
                setTransactions={setTransactions}
            />
        // <div key={id}>
        //     <h2>Item Name: {item_name}</h2>
        //     <h3>Amount: {amount}</h3>
        //     <h4>Category: {category}</h4>
        //     <button onClick={() => setToggleDetails({show: true, id})} >Details</button>
        //     <button onClick={() => handleDelete(id)}>Delete</button>
        //     <hr />
        // </div>
        )}
        </tbody>
        </table>;
};

export default Transactions;