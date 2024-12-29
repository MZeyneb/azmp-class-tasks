import React from 'react';
import { NavLink } from "react-router-dom";
import "../Client-header/index.css";
import { useFavorites } from "../../Context/FavoritesContext";

const ClientHeader = () => {
  const { favorites } = useFavorites(); // Get favorites from context

  return (
    <>
      <nav>
        <h1>My Project</h1>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/Contact"}>Contact</NavLink></li>
          <li><NavLink to={"/Products"}>Products</NavLink></li>
          <li><NavLink to={"/Favorites"}>Favorites <sup>{favorites.length}</sup></NavLink></li> {/* Display favorites count */}
        </ul>
      </nav>
    </>
  );
};

export default ClientHeader;
