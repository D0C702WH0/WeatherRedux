import React from "react";
import Search from "./Search";
import "./MainContainer.css"

const MainContainer = () => {
  return (
    <div className="MainContainer">
      <h2>Choisissez une ville</h2>
      <Search />
    </div>
  );
};

export default MainContainer;
