import { useEffect, useState } from "react";
import React from "react-router-dom";
import { Links } from "react-router-dom";
import Modal from "../Modal.js";

// import { cartSlice } from "./cartSlice.js";
function Checkout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((o) => !o);

  return (
    <form className="check-out">
      <h2>CHECKOUT</h2>
      <div className="checkout-billing">
        <h2 className="checkout-header">BILLING DETAILS</h2>
        <label className="checkout-label">NAME</label>
        <input className="checkout-input" type="text" placeholder="Name" />

        <label className="checkout-label">Email Address</label>
        <input className="checkout-label" type="email" placeholder="email" />

        <label className="checkout-label">Phone Number</label>
        <input
          className="checkout-input"
          type="tel"
          placeholder="Phone Number"
        />
      </div>
      <Modal isOpen={isOpen} toggleModal={toggleModal} />;
    </form>
  );
}
export default Checkout;
