import React from "react";
import {NavLink} from 'react-router-dom';

const NavBar2 = (props) => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
export default NavBar2;