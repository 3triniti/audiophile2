import React from "react";
import { useSelector } from "react-redux";
import cartIcon from "../images/cart/empty-cart.png";

const EmptyCart = ({ onClick }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <button
      onClick={onClick}
      className="empty-cart-image relative mr-6 md:mr-32"
    >
      <img src={cartIcon} className="invert w-6" alt="" />
      {cart.count > 0 && (
        <div className="flex justify-center items-center text-xs h-5 w-5 absolute -top-2.5 -right-2.5 bg-accent text-white rounded-full">
          {cart.count}
        </div>
      )}
    </button>
  );
};

export default EmptyCart;
