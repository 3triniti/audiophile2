import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black pl-8 pr-8">
      <h2 className="text-white font-Manrope text-2xl font-bold text-left pt-8">
        audiophile
      </h2>
      <nav className="text-white text-xs font-Manrope flex space-x-7 pt-8 tracking-wider">
        <Link to="/">HOME</Link>
        <Link to="/headphones">HEADPHONES</Link>
        <Link to="/speakers">SPEAKERS</Link>
        <Link to="/earphones">EARPHONES</Link>
      </nav>
      <p className=" text-stone-400 text-xs font-Manrope pt-8">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - We're open 7 days a week.
      </p>
      <div className="text-stone-400 text-xs font-Manrope pt-16 pb-8">
        Copyright 2021.All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
