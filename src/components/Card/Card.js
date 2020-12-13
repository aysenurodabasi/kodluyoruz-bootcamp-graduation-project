import React from "react";
import "./Card.css";
import Image from "../Image/Image";
import Information from "../Information/Information";

function Card({ data }) {
  return (
        <div className="itemContent">
          <div>
            <Image data={data.image} />
          </div>
          <div className="description">
            <Information information={data} />
          </div>
        </div>
  );
}

export default Card;
