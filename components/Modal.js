import React from "react";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useGetProductsQuery } from "../app/services/api";
import {} from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter.js";
import { Link } from "react-router-dom";
import Checkout from "./Pages/Checkout";

export default function Modal({ isOpen, toggleModal }) {
  //   const [product, setProduct] = useState();
  //   const { data } = useGetProductsQuery();
  //   const { itemName } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.cart);
  const updateQuantity = (updateQuantity) => {};

  //   useEffect(() => {
  //     setProduct(data?.find((item) => item.slug === itemName));
  //   }, [data, itemName]);

  return (
    <>
      {isOpen && (
        <div className="modal bg-white absolute">
          <div
            className="overlay fixed top-0 left-0 right-0 bottom-0 bg-black opacity-40"
            onClick={toggleModal}
          ></div>

          <div className="modal-content fixed bg-white w-1/2 right-48 top-32 p-8 rounded">
            <div className="header font-Manrope text-lg leading-relaxed pb-6">
              CART
            </div>
            {products.map((product) => (
              <div className="flex">
                <img
                  className="modal-img w-20 h-20 mt-2 rounded-md"
                  src={product.cartImage}
                  alt={product?.name}
                />

                <div className="columns pl-2 pr-12 pt-6">
                  {product.shortName}
                  <div>${product.price}</div>
                </div>
                <Counter
                  className=""
                  count={product.quantity}
                  updateCount={updateQuantity}
                />
              </div>
            ))}
            <Link
              className="checkout-btn bg-orange-600 h-8 w-80 mt-8 font-Manrope text-xs tracking-wider text-white"
              to={Checkout}
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
