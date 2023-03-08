import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetProductsQuery } from "../../app/services/api";
import { useScreenSize } from "../../app/hooks/useScreenSize.js";
import CategoryBox from "../CategoryBox.js";
import CategoryImg from "../../images/shared/desktop/image-best-gear.jpg";
import Footer from "../Footer.js";
import CartButton from "../buttons/CartButton";

function Item() {
  const [product, setProduct] = useState();
  const { data } = useGetProductsQuery();
  const { itemName } = useParams();
  const screenSize = useScreenSize();

  useEffect(() => {
    setProduct(data?.find((item) => item.slug === itemName));
  }, [data, itemName]);

  return product ? (
    <>
      <div className="">
        <div className="flex">
          <img
            className="object-cover w-1/2 h-1/2 pl-16 mt-16"
            src={product.image[screenSize]}
            alt={product?.name}
          />
          <div className="font-Manrope text-xl font-bold uppercase tracking-wider mt-36 mr-20 pl-16">
            {product.name}
            <div className="font-Manrope font-light text-xs text-slate-500 tracking-normal normal-case -mr-12 pt-16">
              {product.new}
              {product.description}
            </div>{" "}
            <div className="font-Manrope font-bold text-xs pt-16">
              {" "}
              ${product.price}{" "}
            </div>
            <CartButton product={product} />
          </div>
        </div>

        <div className=" flex font-Manrope text-lg font-bold tracking-wider mt-24 pl-16">
          FEATURES
          <div className="font-Manrope text-lg font-bold tracking-wider pl-80">
            IN THE BOX
          </div>
        </div>
        <div className=" font-Manrope text-xs text-slate-500 normal-case pt-8 pl-16 pr-96">
          {product.features}
        </div>
        {product.includedItems.map((info) => (
          <div className="flex justify-center ml-80 mb-6">
            <div className="-mt-56 text-orange-600 font-Manrope text-xs">
              {info.quantity}
            </div>{" "}
            <div className="-mt-56 font-Manrope text-slate-500 text-xs pl-5">
              {info.item}
            </div>
          </div>
        ))}

        <div className="flex gap-4 -mt-32">
          <div className=" w-56 h-48 ml-16 rounded-md">
            <img
              className="pt-20"
              src={product.gallery.first[screenSize]}
              alt={product?.name}
            ></img>{" "}
            <img
              className="pt-5"
              src={product.gallery.second[screenSize]}
              alt={product?.name}
            ></img>{" "}
          </div>
          <img
            className=" w-1/2 h-96 pt-20 rounded-md"
            src={product.gallery.third[screenSize]}
            alt={product?.name}
          ></img>
        </div>
        <div className="grid grid-cols-3 pt-16 pl-24">
          {product.others.map((item) => (
            <div className="grid grid-cols-1 place-items-center">
              <img
                className="item-img w-5/6 h-5/6 mr-24"
                src={item.image?.[screenSize]}
                alt={item?.name}
              />
              <div className="font-Manrope text-sm font-bold uppercase text-center mr-24 pt-5">
                {item.name}{" "}
                <Link
                  to={`/${item.slug}`}
                  className="block home-submit-btn items-center w-28 h-10 font-Manrope bg-orange-500 text-white text-xs text-center mt-5 pt-3 mb-20"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          ))}
        </div>
        <CategoryBox />
        <div className="flex pb-20">
          <div className="font-Manrope font-semibold w-1/2 mt-16 pl-12 pr-6 text-xl text-left tracking-wider">
            BRINGING YOU THE
            <span className="text-orange-500 space-y-5"> BEST </span>
            AUDIO GEAR
            <p className="text-xs leading-relaxed font-Manrope text-slate-500 tracking-normal pt-6 pr-6">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demostration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
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
      </div>
      <Footer />
    </>
  ) : null;
}
export default Item;
