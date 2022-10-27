import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const [item, setItem] = useState();
  const { itemName } = useParams();

  //   return !item ? null : (
  //     <div className="item">
  //       {/* <Content planet={planet} />
  //     <DataRow className="data" planet={planet} /> */}
  //     </div>
  //   );
  // }
}
export default Item;
