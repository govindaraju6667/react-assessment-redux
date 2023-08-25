import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar">
      <Link to="/Home">Home</Link>
      <Link to="/Blogs">Shopping</Link>
      <Link to="/List">Productlist</Link>
      <Link to="/About">About</Link>
      <Link to="/Login">Login</Link>
      <Link to="/List"></Link>
    </div>
  );
};

export default Navbar;
