import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="">
      <h2 className="">AUDIOPHILE</h2>
      <div className="">
        <Link to="/Headphones">HEADPHONES</Link>
        <Link to="/Speakers">SPEAKERS</Link>
        <Link to="/Earphones">EARPHONES</Link>
      </div>
    </nav>
  );
}

export default Navbar;
