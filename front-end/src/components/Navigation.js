import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo.png";


export default function Navigation() {


    return (

        <nav className="navDiv">
            <div className="logoDiv">
                <NavLink className="link" exact activeClassName="active" to={'/'}>
                    <img src={Logo}></img>
                </NavLink>
            </div>

            <div className="optionsDiv">
                <div className = 'options'>
                    <NavLink className="link" exact activeClassName="active" to={'/dashboard'}>
                        dashboard
            </NavLink>

                    <NavLink className="link" activeClassName="active" to={'/login'}>
                        log in
            </NavLink>
                </div>
            </div>


        </nav>
    );
}

