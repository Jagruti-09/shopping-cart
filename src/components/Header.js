import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import "./styles.css";

const Header = () => {

  const {cart} = useContext(Cart);
  return (
    <div>
      
      <ul className="nav">
        <li>
          <Link className="navLink" to="/">Home Page</Link>
        </li>
        <li>
          <Link className="navLink" to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
