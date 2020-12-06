import './Navbar.css';
import {NavLink} from 'react-router-dom';
import logo from './img/Logo.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary navigation">
            <img src={logo} alt="baby shark"className="img" />
            <NavLink className="navbar-brand" to="/">Shark Rank</NavLink>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fa fa-lg mt-1 fa-bars text-primary"></i></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link active" to="/main">Dashboard</NavLink>
                    <NavLink className="nav-link" to="/about">About us</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;