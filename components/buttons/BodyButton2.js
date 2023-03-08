import React from "react";
import { Link } from "react-router-dom";

const Button2 = () => {
  return (
    <div className="z-50 items-center w-36 h-10 font-Manrope bg-transparent border-2 border-black text-black text-sm mt-3">
      <Link to="/speakers/zx7-speaker" className="z-50" id="submit">
        SEE PRODUCT
      </Link>
    </div>
  );
};

export default Button2;
