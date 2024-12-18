import { useState, useEffect } from "react";
import controller from "../../services";
import { endpoints } from "../../services/constants";
import Add from "../Products/Add"
import Cards from "./Cards";


const Recipes = () =>{
    const [recipes, setRecipes] = useState([])
    const getRecipes = async() => {
        const data = await controller.getAllData(endpoints.recipes)
        setRecipes(data)
    }
    useEffect(()=>{
        getRecipes()
    }, []);
    // console.log(recipes.recipes);

    return(
        <div>

            <Add recipes={recipes} setRecipes = {setRecipes}/>
            <Cards recipes={recipes.recipes} setRecipes={setRecipes}/>
            
        </div>
    )

}

export default Recipes;