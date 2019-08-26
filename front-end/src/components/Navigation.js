import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../components/Login";
import Logo from "../Logo.png";

export default function Navigation() {
  return (
    <nav className="navDiv">
      <NavLink exact activeClassName="active" to={"/"}>
        <img src={Logo}></img>
      </NavLink>

      <NavLink exact activeClassName="active" to={"/dashboard"}>
        dashboard
      </NavLink>

      <NavLink activeClassName="active" to={"/Login"}>
        log in
      </NavLink>
    </nav>
  );
}
