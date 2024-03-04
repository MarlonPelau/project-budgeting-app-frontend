import { Link } from "react-router-dom";

const Navigation = ({transactions}) => {
    const total = transactions.reduce((acc, current) => acc += current.amount, 0);

    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <Link 
            to={`/`} 
            className="navbar-brand">Budgtr</Link>
        <Link to={`/new`}>
            <button className="btn btn-outline-success" type="submit">Create Transaction</button>
        </Link>
          <h3>${total}</h3> 
        </div>
        </nav>
    )
}

export default Navigation;