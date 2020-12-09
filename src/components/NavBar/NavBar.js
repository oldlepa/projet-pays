import React from "react";
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="/"exact className="nav-link">Accueil</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/pays" exact className="nav-link">Les Pays</NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )

}
export default NavBar;