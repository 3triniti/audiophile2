import React from "react";
import { Link } from "react-router-dom";

const Button3 = () => {
  return (
    <div className="items-center w-36 h-10 font-Manrope bg-transparent border-2 border-black text-black text-sm ml-3">
      <Link to="/earphones/yx1-earphones" className="p-2" id="submit">
        SEE PRODUCT
      </Link>
    </div>
  );
};

export default Button3;
