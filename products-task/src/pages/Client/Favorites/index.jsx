import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaHeart } from 'react-icons/fa'; 
import { useFavorites } from '../../../Context/FavoritesContext'; 

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();  

  const handleRemoveFromFavorites = (product) => {
    removeFromFavorites(product);  
  };

  return (
    <div>
      <Helmet>
        <title>Favorites</title>
      </Helmet>

      <div className='products'>
        {favorites.length > 0 ? (
          favorites.map((p) => (
            <div className="card" key={p.id}>
              <div className="ic" onClick={() => handleRemoveFromFavorites(p)}>
                <FaHeart color="red" /> 
              </div>
              <img src={p.image} alt={p.title} width={100} />
              <h1>{p.title}</h1>
              <p>${p.price}</p>
            </div>
          ))
        ) : (
          <p>No products in favorites yet.</p> 
        )}
      </div>
    </div>
  );
};

export default Favorites;
