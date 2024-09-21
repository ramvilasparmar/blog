import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return(
        <div className="navbar-section">
            <ul className="navbar">
                <li>
                <NavLink to="/" className="nav-bar-link">Home</NavLink>
                </li>
                <li>
                <NavLink to="/users" className="nav-bar-link">Users</NavLink>
                </li>
                <li>
                <NavLink to="/signup" className="nav-bar-link">SignUp</NavLink>
                </li>
            </ul> 
        </div>
    )
};

export default NavBar;