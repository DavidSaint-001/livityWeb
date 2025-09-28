import React, { useEffect, useContext, useState } from "react";
import "./Shop.css"; 
import { CartContext } from "../context/CartContext"; 

import product from '../assets/brown.jpg';
import product2 from '../assets/fifth product.jpg';
import doc from '../assets/green .jpg';
import product4 from '../assets/shorts.jpg';
import product5 from '../assets/shoe.jpg';
import product6 from '../assets/second product.jpg';
import product3 from '../assets/seventh product.jpg';
import product7 from '../assets/background.jpg';

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    const cards = document.querySelectorAll(".product-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  const products = [
    { id: 1, name: "Classic Shorts", desc: "Good Ready To Wear Short", price: 25, img: product4 },
    { id: 2, name: "Dr martins shoe", desc: "Your quality shoe for everyday use", price: 45, img: product5 },
    { id: 3, name: "Green Denim Jacket", desc: "Your Stylish Jacket for Any Occasion", price: 15, img: product6 },
    { id: 4, name: "Cotton Jacket", desc: "Comfortable and breathable cotton jacket perfect for layering", price: 35, img: doc },
    { id: 5, name: "Brown Pants", desc: "Comfortable brown pants perfect for casual wear", price: 20, img: product2 },
    { id: 6, name: "Winter Sweater", desc: "Soft and warm sweater for cold days", price: 50, img: product },
    { id: 7, name: "Baggy Pants", desc: "Stylish and comfortable baggy pants for a relaxed look", price: 50, img: product3 },
    { id: 8, name: "Winter Sweater", desc: "Cozy and fashionable winter sweater for chilly days", price: 50, img: product7 },
    { id: 9, name: "Winter Sweater", desc: "Soft and warm winter sweater for chilly days", price: 50, img: product7 },
  ];

  return (
    <div className="shop-container" id="shop-now">
      <h1>Our Products</h1>
      <div className="products">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h2>{p.name}</h2>
            <h3>{p.desc}</h3>
            <span className="price">${p.price}</span>
            <button onClick={() => setSelectedProduct(p)}>View Details</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>X</button>
            <img src={selectedProduct.img} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.desc}</p>
            <span className="price">${selectedProduct.price}</span>

            <div className="options">
              <label>Size:</label>
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="">Select Size</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>

              <label>Color:</label>
              <select value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="">Select Color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Black">Black</option>
              </select>
            </div>

           <button
           onClick={() => {
            if (!size || !color) {
              alert("Please select size and color");
              return;
            }
            addToCart({
              ...selectedProduct,
              size,
              color,
            });
            setSelectedProduct(null);
            setSize("");
            setColor("");
           }}
           >
            Add to Cart

           </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
