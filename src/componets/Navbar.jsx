import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
     
      <div className="logo"> ŁIVITY</div>

      
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="cart-link">
          <Link to="/cart">Cart</Link>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </li>
      </ul>

     
      <div className="cta">
        <button
          className="wobble-hor-bottom"
          onClick={() => {
            const shopSection = document.getElementById("shop-now");
            shopSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Shop Now
        </button>
      </div>

     
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
