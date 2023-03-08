import React from "react-router-dom";
import categoryHeadphones from "../images/category-headphones/tablet/image-xx99-mark-one.jpg";
import categorySpeakers from "../images/category-speakers/tablet/image-zx9.jpg";
import categoryEarphones from "../images/category-earphones/tablet/image-yx1-earphones.jpg";
import { Link } from "react-router-dom";

const CategoryBox = () => {
  return (
    <div className="box-content w-screen md:w-fit bg-white flex items-center pl-12 pr-12 pt-6 mt-28 md:mt-60 gap-x-3">
      <div className="category-img-headphones rounded-md bg-neutral-100 text-sm text-center pt-8 font-semibold font-Manrope">
        <img src={categoryHeadphones} className="rounded-md pt-0" alt="" />
        HEADPHONES
        <nav className="text-xs text-slate-500 font-Manrope pt-2 pb-5">
          <Link to="/headphones">
            SHOP <span className=" text-orange-500">&gt;</span>{" "}
          </Link>
        </nav>
      </div>
      <div className="category-img-speakers rounded-md bg bg-neutral-100 text-sm text-center pt-8 font-semibold font-Manrope">
        <img src={categorySpeakers} className="rounded-md" alt="" />
        SPEAKERS
        <nav className="text-xs text-slate-500 font-Manrope pt-2 pb-5">
          <Link to="/speakers">
            SHOP <span className="text-orange-500">&gt;</span>{" "}
          </Link>
        </nav>
      </div>
      <div className="category-img-earphones rounded-md bg bg-neutral-100 text-sm text-center pt-8 font-semibold font-Manrope">
        <img src={categoryEarphones} className="rounded-md" alt="" />
        EARPHONES
        <nav className="text-xs text-slate-500 font-Manrope pt-2 pb-5">
          <Link to="/earphones">
            SHOP <span className="text-orange-500">&gt;</span>{" "}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default CategoryBox;
