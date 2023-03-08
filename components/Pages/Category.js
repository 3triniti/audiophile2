import { Link, useParams } from "react-router-dom";
// import Page from "./Page.js";
// import { Home } from "./components/Pages/Home";
// import Item from "./components/Pages/Item.js";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../app/services/api.js";
import { useScreenSize } from "../../app/hooks/useScreenSize.js";
import CategoryBox from "../CategoryBox.js";
import CategoryImg from "../../images/shared/desktop/image-best-gear.jpg";
import Footer from "../Footer.js";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { data } = useGetProductsQuery();
  const { category } = useParams();
  const screenSize = useScreenSize();

  useEffect(() => {
    setProducts(data?.filter((item) => item.category === category));
  }, [data, category]);

  console.log(data);

  return products?.length ? (
    <>
      <header className="bg-black h-36 w-screen text-white font-Manrope font-semibold text-center uppercase text-2xl tracking-wider pt-14">
        {category}
      </header>
      {products.map((product) => (
        <div className="group grid grid-cols-2 gap-x-12 ml-16 mr-16">
          <img
            className="product-img object-cover h-72 w-72 justify-center mt-8 mb-8 rounded-md"
            src={product.categoryImage[screenSize]}
            alt={product?.name}
          />
          <div className="product-info group-odd:-order-1 font-Manrope text-xs">
            <h3 className="product-header font-Manrope tracking-wide font-semibold uppercase text-base pr-28 pt-20">
              {product.name}
            </h3>
            <div className="product-description font-Manrope text-xs text-slate-500 font-light pt-4">
              {product.description}
              <Link
                to={product.slug}
                className="block home-submit-btn items-center w-36 h-10 font-Manrope bg-orange-500 text-white text-sm text-center mt-5 pt-2.5"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>
      ))}
      <CategoryBox />
      <div className="flex pb-20">
        <div className="font-Manrope font-semibold w-1/2 mt-16 pl-12 pr-6 text-xl text-left tracking-wider">
          BRINGING YOU THE
          <span className="text-orange-500 space-y-5"> BEST </span>
          AUDIO GEAR
          <p className="text-xs leading-relaxed font-Manrope text-slate-400 tracking-normal pt-6 pr-6">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demostration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div>
          <img
            src={CategoryImg}
            className="mt-12 w-72 h-80 rounded-md"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  ) : null;
};

export default Category;
