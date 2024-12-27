import React from 'react'
import { BsFillHeartFill } from "react-icons/bs";
import { useContext } from 'react';
import { FavoritesContext } from '../../../Context/FavoritesContext';

const Favorites = () => {
    const {favorites, toggleFavorites, clearFavorites} = useContext(FavoritesContext)
  return (
    <div className="cards">
        {favorites && favorites.map((p)=>{
        return(
          <div className="card" key={p.id}>
            <div className="ic">
          <button onClick={()=>toggleFavorites(p)}></button>
            </div>
            <img src={p.image} alt="" width={100}/>
            <h1 >{p.title}</h1>
            <p>{p.price}</p>
          </div>
        )
      })}
      </div>
  )
}

export default Favorites
