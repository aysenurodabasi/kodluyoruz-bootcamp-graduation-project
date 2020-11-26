import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

function CardList({ data }) {
  return (
    <div className="cardlistContent">
      <Card data={data} />
    </div>
  );
}

export default CardList;
