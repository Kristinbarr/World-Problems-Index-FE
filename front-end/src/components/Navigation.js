import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.png";


export default function Navigation() {
    
    
    return (

        <nav>
            <NavLink exact activeClassName="active" to={'/'}>
                <img src = {Logo}></img>
            </NavLink>

            <NavLink exact activeClassName="active" to={'/dashboard'}>
                dashboard
            </NavLink>

            <NavLink activeClassName="active" to={'/solutions'}>
                log in
            </NavLink>
        </nav>
    );
}

