import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import "./styles.css";

const Header = () => {

  const {cart} = useContext(Cart);
  return (
    <div>
      <span className="header">React Context API Tutorial</span>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
