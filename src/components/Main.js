import React from "react";
import Home from "./Home";
import FavList from "./FavList";
import PokeList from "./PokeList";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import PokeSingle from "./PokeSingle";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokelist" element={<PokeList />}>
          <Route path="pokesingle" element={<PokeSingle />} />
        </Route>
        <Route path="favlist" element={<FavList />} />
        <Route path="about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
