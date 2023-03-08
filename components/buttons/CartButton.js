import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import Counter from "../Counter.js";

const CartButton = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ ...product, quantity }));
  };

  return (
    <div className="flex mt-16 gap-2">
      <Counter count={quantity} updateCount={setQuantity} />
      <button
        className=" bg-orange-600 text-white text-xs h-10 w-32"
        id="submit"
        onClick={addToCart}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default CartButton;
