import { useState } from "react";
import { Info } from "./Info";
import { ItemImage } from "./ItemImg";
import { Button } from "./Button";

export const Content = ({ item }) => {
  const [display, setDisplay] = useState();

  return (
    <>
      <div className="Navbar">
        <ItemImage item={item} display={display} />
        <div>
          <ItemImage item={item} display={display} />
        </div>
        <div>
          <ItemImage item={item} display={display} />
        </div>
        <div className="box">
          <Info item={item} display={display} />
          <Button setDisplay={setDisplay} />
        </div>
      </div>
    </>
  );
};
