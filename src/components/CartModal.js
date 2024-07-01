import React, { useContext } from "react";
import CartContext  from "../context/CartContext";
import "./CartModal.css";

function CartModal({ onClose }) {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Modal isOpen={true} onRequestClose={onClose} className="cart-modal">
      <div className="cartcontent">
        <h2>Cart</h2>
        {cart.map((item, index) => (
          <div key={index} className="cartitem">
            <span>
              {item.name} - Rs.{item.price} x {item.quantity} = Rs.
              {(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
        <hr />
        <h3>Total: Rs.{totalPrice.toFixed(2)}</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
}

export default CartModal;