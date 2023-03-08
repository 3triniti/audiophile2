import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="items-center h-8 w-36 md:h-10 font-Manrope bg-orange-500 text-white md:text-sm text-xs ml-36 md:ml-80 lg:ml-40 mt-2 md:mt-8">
      <Link
        to="/headphones/xx99-mark-two-headphones"
        className="p-6"
        id="submit"
      >
        SEE PRODUCT
      </Link>
    </div>
  );
};

export default Button;
