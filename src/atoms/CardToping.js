import React, { useState } from "react";
import { Image } from "react-bootstrap";

import checklist from "../images/Group.svg";

function CardToping({ item, key }) {
  const [isChosen, setIsChosen] = useState(false);
  return (
    <div
      key={key}
      className="container-toping"
      onClick={() => setIsChosen(!isChosen)}
    >
      <Image className="toping" src={item.image} />
      <p className="text-toping"> {item.name} </p>
      {isChosen && <Image className="toping-checked" src={checklist} />}
    </div>
  );
}

export default CardToping;
