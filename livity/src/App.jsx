import React, { useState } from "react";
import "./App.css";
import Navbar from "./componets/Navbar";
import Herosection from "./componets/Herosection";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./componets/Cart";
import Herosection from "./componets/Herosection"; 


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Navbar />
      <Herosection />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
};

export default App;
