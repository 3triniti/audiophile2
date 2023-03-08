import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger.js";
import EmptyCart from "./EmptyCart.js";
import Modal from "./Modal.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((o) => !o);

  return (
    <nav className="bg-stone-900 w-screen h-24 px-4 flex items-center justify-between border-b border-solid border-gray fixed top-0 left-0 right-0">
      <div className="flex items-center">
        <Burger className="md:hidden" />
        <Link to="/">
          <h2 className="text-white hover:text-slate-300 font-Manrope text-2xl font-bold text-center ml-24 md:ml-16 md:text-left lg:ml-32">
            audiophile
          </h2>
        </Link>
      </div>
      <div className="box-content hidden md:hidden lg:flex items-center md:pr-12 md:pt-1 md:gap-x-8">
        <Link
          to="/"
          className="headphones text-slate-400 hover:text-orange-500 text-sm text-center font-semibold font-Manrope"
        >
          HOME
        </Link>
        <Link
          to="/headphones"
          className="headphones  text-slate-400 hover:text-orange-500 text-sm text-center font-semibold font-Manrope"
        >
          HEADPHONES
        </Link>
        <Link
          to="/speakers"
          className="speakers  text-slate-400 hover:text-orange-500 text-sm text-center font-semibold font-Manrope"
        >
          SPEAKERS
        </Link>

        <Link
          to="/earphones"
          className="earphones text-slate-400 hover:text-orange-500 text-sm text-center font-semibold font-Manrope"
        >
          EARPHONES
        </Link>
      </div>

      <EmptyCart onClick={toggleModal} />
      <Modal isOpen={isOpen} toggleModal={toggleModal} />
    </nav>
  );
}
export default Navbar;
