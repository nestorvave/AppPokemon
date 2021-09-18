import React from "react";

export default function Types({ types }) {
  return (
    <div className="type">
      
      {types.map((type) => (
        <div key={type} className={type} >{type}</div>
      ))}
    </div>
  );
}
