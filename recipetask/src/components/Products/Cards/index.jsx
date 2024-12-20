import controller from "../../../services";
import { endpoints } from "../../../services/constants";

const Cards = ({ recipes, setRecipes }) => {
  return (
    <div className="container">
        <h1>Delicious Recipes</h1>
        <input type="text" />
      <div className="cards">
        {recipes &&
          recipes.map((r) => {
            return (
              <div className="card" key={r.id}>
                
                  <img src={r.image} alt="" width={100} />
                
                <h3>{r.id}</h3>
                <h2>{r.name}</h2>
                <p>{r.rating}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;

