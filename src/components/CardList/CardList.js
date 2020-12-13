import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

function CardList({ data }) {
  return (
    <div className="cardlistContent">
       {data.map((item, i) => (
        <Card data={item}/>
      ))}
    </div>
  );
}

export default CardList;
