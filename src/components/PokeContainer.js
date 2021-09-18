import React, { useEffect, useState } from "react";
import pokemon from "../helpers/data.json";
import PokeCard from "./PokeCard";

export const PokeContainer = () => {
  const [data, setData] = useState([]);

  const infoPoke = () => {
    const pokemones = pokemon.map((poke) => {
      const { types, id, name, evolution, url } = poke;
      return { types, id, name, evolution, url };
    });
    setData(pokemones);
    return pokemones;
  };
  useEffect(() => {
    infoPoke();
  }, []);

  return (
    <div className="container flex">
      {data.map(({ id, url, types, name, evolution }) => (
        <PokeCard
          key={id}
          url={url}
          types={types}
          name={name}
          evolution={evolution}
        />
      ))}
    </div>
  );
};
