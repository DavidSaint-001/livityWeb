import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./componets/Navbar";
import Shop from "./componets/Shop";
import Cart from "./componets/Cart";
import About from "./componets/About";
import LandingPage from "./componets/LandingPage";
import Carousel from "./componets/carousel";
import Contact from "./componets/Contact";

function App() {
  return (
    <CartProvider>
      <Router>
       <Carousel/>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
