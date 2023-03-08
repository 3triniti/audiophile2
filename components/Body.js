import React from "react-router-dom";
import homeSpeaker from "../images/home/tablet/image-speaker-zx9.png";
import Button from "./buttons/BodyButton.js";
import homeSpeaker2 from "../images/home/tablet/image-speaker-zx7.jpg";
import Button2 from "./buttons/BodyButton2.js";
import homeEarphone from "../images/home/tablet/image-earphones-yx1.jpg";
import Button3 from "./buttons/BodyButton3";
import homeHeadphone from "../images/shared/tablet/image-best-gear.jpg";
import homeHeadphone2 from "../images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";

const Body = () => {
  return (
    <>
      <div className="bg-circles lg:flex min-h-screen min-w-screen bg-orange-500 mt-20 lg:mt-96 ml-12 mr-12 rounded-md text-center text-white text-5xl font-Manrope font-semibold tracking-widest ">
        <img
          src={homeSpeaker}
          className=" pl-56 pr-56 lg:pr-0 pt-12 lg:pl-32 lg:mt-44 rounded-md"
          alt=""
        />
        <div className="lg:ml-32 lg:mr-8 lg:items-start lg:text-left lg:mt-48">
          <div className=" pt-16 pl-48 lg:pl-0 pr-48 lg:ml-0">ZX9 SPEAKER</div>
          <div className="items-center lg:items-start">
            <p className="lg:text-left text-center leading-relaxed tracking-normal text-sm font-light text-white pt-12 lg:pt-6 font-Manrope ml-44 mr-44 lg:ml-0">
              Upgrade to premium speakers that are phenomenally to deliver truly
              remarkable sound
              <Button />
            </p>
          </div>
        </div>
      </div>
      <div className="ml-12 mr-12">
        <img src={homeSpeaker2} className="mt-8 rounded-md" alt="" />
        <div className="text-black font-Manrope text-xl font-semibold pl-16 -mt-48 tracking-widest">
          ZX7 SPEAKER
          <Button2 />
        </div>
      </div>
      <div className="flex gap-2 px-8 pt-32 ml-4 mr-4">
        <div className="w-1/2">
          <img src={homeEarphone} className="rounded-md lg:mt-12" alt="" />
        </div>
        <div className="flex w-1/2 bg-neutral-100 pr-12 pl-12 pt-24 lg:mt-12 text-black font-Manrope text-xl font-semibold tracking-widest rounded-md">
          YX1 EARPHONES
          <Button3 />
        </div>
      </div>
      <img
        src={homeHeadphone}
        className="lg:hidden pt-8 pl-12 pr-12 rounded-md"
        alt=""
      />
      <div className="lg:text-left font-Manrope font-semibold mt-14 lg:mt-24 text-3xl text-center lg:ml-12 ml-28 mr-28 tracking-wider">
        BRINGING YOU THE
        <span className="text-orange-500 space-y-5"> BEST </span>
        AUDIO GEAR
        <div className="lg:flex">
          <p className="text-xs mt-8 -ml-0 -mr-0 pb-20 leading-relaxed font-Manrope text-slate-500 tracking-normal">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demostration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
          <img
            src={homeHeadphone2}
            className="-mt-16 pl-12 pr-12 mb-12 rounded-md"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Body;
