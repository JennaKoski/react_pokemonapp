import React from "react";
import { Link } from "react-router-dom";

const PokeList = () => {
  return (
    <div>
      PokeList
      <Link to="pokesingle">Show me single Pokemon</Link>
    </div>
  );
};

export default PokeList;
