import React from "react";
import "./App.css";
import MyFooter from "./components/MyFooter";
import { PokeContainer } from "./components/PokeContainer";


function App() {
  return (
    <div className="App flex">
      <h2 className=" animate__animated animate__backInLeft animate__delay-2s">Pokedex</h2>
      <p className=" animate__animated animate__backInRight animate__delay-3s">
        Welcome to my pokedex, here you can find some pokemons, their evolutions and types
      </p>
      <PokeContainer />
      <MyFooter />
    </div>
  );
}

export default App;
