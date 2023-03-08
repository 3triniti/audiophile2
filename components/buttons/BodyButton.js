import React from "react";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useGetProductsQuery } from "../../app/services/api";

function Button() {
  // const [product, setProduct] = useState();
  // const { data } = useGetProductsQuery();
  // const { itemName } = useParams();

  // useEffect(() => {
  //   setProduct(data?.find((item) => item.slug === itemName));
  // }, [data, itemName]);

  return (
    <div className="items-center w-36 h-10 font-Manrope bg-black text-white text-sm mt-8 lg:mb-12">
      <Link to="/speakers/zx7-speaker" className="home-submit-btn" id="submit">
        SEE PRODUCT
      </Link>
    </div>
    //   ))}
    //
  );
}

export default Button;
