import { useState, useEffect } from "react";
import controller from "../../../services";
import { endpoints } from "../../../services/constants";


const Add = ({ recipes, setRecipes }) => {
    const [categories, setCategories] = useState([]);
    const [recipe, setRecipe] = useState({
      name: "",
      image: "",
      rating: 0
    })
}

export default Add;