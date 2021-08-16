import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Vending Machine Home
      </NavLink>
      <NavLink exact to="/snickers">
        Snickers
      </NavLink>
      <NavLink exact to="/sprite">
        Sprite
      </NavLink>
      <NavLink exact to="/cheetos">
        Cheetos
      </NavLink>
    </nav>
  );
}

export default NavBar;