import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo.png";

export default function Navigation() {
  return (
    <nav className="navDiv">
      <div className="logoDiv">
        <NavLink className="link" exact activeClassName="active" to={"/"}>
          <img src={Logo} alt='logo'></img>
        </NavLink>
      </div>

      <div className="optionsDiv">
        <NavLink
          className="link"
          exact
          activeClassName="active"
          to={"/dashboard"}
        >
          dashboard
        </NavLink>

        <NavLink className="link" activeClassName="active" to={"/login"}>
          login
        </NavLink>
      </div>
    </nav>
  );
}
