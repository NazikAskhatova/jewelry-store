
import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.css";

function Nav() {
  return (
      <ul className={classes.Nav}>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products">Our Products</NavItem>
        <NavItem url="/about">About</NavItem>
      </ul>
  
  );
}

export default Nav;



