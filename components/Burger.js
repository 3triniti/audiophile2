import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CategoryBox from "./CategoryBox";

export const Burger = ({ setView }) => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const toggleIsOpen = () => {
    setOpen((o) => !o);
  };
  return (
    <>
      <button
        onClick={toggleIsOpen}
        className="text-white mt-1.5 flex flex-col gap-1"
      >
        <div className="w-4 h-0.5 bg-white hover:bg-orange-500" />
        <div className="w-4 h-0.5 bg-white hover:bg-orange-500" />
        <div className="w-4 h-0.5 bg-white hover:bg-orange-500" />
      </button>
      {isOpen && (
        <div className="absolute top-20 bg-white left-0 right-0">
          <CategoryBox />
        </div>
      )}
    </>
  );
};

export default Burger;
