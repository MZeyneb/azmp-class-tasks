import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlice";
import { useGetAllCategoriesQuery } from "../redux/services/categoriesApi";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const { data } = useGetAllCategoriesQuery();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  const toggleFavorite = (category) => {
    if (isFavorite(category.id)) {
      dispatch(removeFavorite(category.id));
    } else {
      dispatch(addFavorite(category));
    }
  };

  return (
    <>
    <div className="box">



         <div className="arw">

<h1>Categories App</h1>
<nav>
  <NavLink to="/">Home</NavLink> | <NavLink to="/favorites">Favorites</NavLink>
</nav>
      <NavLink to={"/add-edit"}>Add Category</NavLink>

</div>
      <ul>
        {data?.map((category) => (
          <li key={category.id}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <button
              onClick={() => toggleFavorite(category)}
              style={{
                color: isFavorite(category.id) ? "red" : "black",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              ❤️
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Categories;
