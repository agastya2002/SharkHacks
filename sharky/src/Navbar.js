import './Navbar.css';
import {NavLink} from 'react-router-dom';
import logo from './img/Logo.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary navigation">
            <img src={logo} alt="baby shark"className="img" />
            <a className="navbar-brand" href="#">Shark Rank</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fa fa-lg mt-1 fa-bars text-primary"></i></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-link" to="/about">About us</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;