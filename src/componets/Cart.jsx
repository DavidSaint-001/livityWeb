import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h2>{item.name}</h2>
                  <p>${item.price}</p>


                  <div className="cart-variants">
                    {item.size && <span><strong>Size:</strong> {item.size}</span>}
                    {item.color && <span><strong>Color:</strong> {item.color}</span>}
                  </div>


                  <p className="cart-subtotal">
                    Subtotal: ${(item.price * item.qty).toFixed(2)}
                  </p>

                  <div className="cart-controls">
                    <button onClick={() => removeFromCart(item)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                    <button className="remove-btn" onClick={() => deleteFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <button className="checkout-btn" onClick={clearCart}>
              Checkout
            </button>
          </div>

        </>
      )}
    </div>
  );
};

export default Cart;
