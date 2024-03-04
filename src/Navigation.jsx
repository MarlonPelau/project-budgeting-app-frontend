import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <Link 
            to={`/`} 
            className="navbar-brand">Budgetr</Link>
        <Link to={`/new`}>
            <button className="btn btn-outline-success" type="submit">Create Transaction</button>
        </Link>
            
        </div>
        </nav>
    )
}

export default Navigation;