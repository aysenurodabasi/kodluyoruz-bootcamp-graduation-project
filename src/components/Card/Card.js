import React from "react";
import "./Card.css";
import Image from "../Image/Image";
import Information from "../Information/Information";

function Card({ data }) {
  return (
    <div classList="cardContent" id="cardId">
      {data.map((item, i) => (
        <div className="itemContent" key={i}>
          <div>
            <Image data={item.image} />
          </div>
          <div className="description">
            <Information information={item} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
