import React from "react";
import './Card.css'

function Card({ data }) {
  return (
    <div classList="cardContent">
      {data.map((item, i) => (
        <div className="itemContent" key={i}>
          <h3><a  href={item.url}>{item.name}</a></h3>
          <p>Kaynak: {item.source}</p>
          <p>{item.description}</p>
        </div>
      ))}
     </div>
  );
}

export default Card;
