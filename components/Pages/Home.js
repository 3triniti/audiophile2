// import { Body } from "./Body"
import Button from "../buttons/HomeButton.js";

import Body from "../Body.js";
import CategoryBox from "../CategoryBox.js";
import Footer from "../Footer.js";

export const Home = () => {
  return (
    <>
      <div className="bg-headphone lg:bg-desktopHome h-screen w-screen bg-contain bg-no-repeat">
        <div className="navbar"></div>
        <div className="text-center lg:text-left lg:ml-40 text-neutral-400 text-xs font-Manrope font-light tracking-widest pt-24 md:pt-48">
          NEW PRODUCT
        </div>
        <div className="text-center lg:text-left w-80 lg:ml-40 md:w-96 lg:w-96 text-white text-2xl md:text-5xl font-Manrope font-semibold pt-2 md:pt-10 ml-6 md:ml-52  tracking-widest">
          XX99 MARK II HEADPHONE
        </div>
        <p className="text-center lg:text-left lg:ml-40 w-72 ml-12 lg:w-80 leading-relaxed text-xs md:text-sm text-lightGray font-Manrope md:pt-6 md:ml-64 md:mr-48">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button />

        <CategoryBox />
      </div>
      <div>
        <Body />
        <Footer />
      </div>
    </>
  );
};
