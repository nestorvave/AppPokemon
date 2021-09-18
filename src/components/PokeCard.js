import React from "react";
import Types from "./Types";
import "animate.css";

export default function PokeCard({ url, name, evolution, types }) {
  evolution === null
    ? (evolution = "Pokemon does not have evolution")
    : (evolution = `Evolution of ${evolution}`);

  return (
    <div className="card flex animate__animated animate__bounceIn animate__delay-4s">
      <img src={url} alt={name} />
      <h3>{name}</h3>
      <h4> {evolution}</h4>
      <hr />
      <p>Type:</p>
      <Types key={name} types={types} />
    </div>
  );
}
