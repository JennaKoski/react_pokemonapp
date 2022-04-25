import React from "react";
import { Link, Outlet } from "react-router-dom";

const PokeList = () => {
  return (
    <div>
      PokeList
      <Link to="pokesingle">Show me single Pokemon</Link>
      <Outlet />
    </div>
  );
};

export default PokeList;
