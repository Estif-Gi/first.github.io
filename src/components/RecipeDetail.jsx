import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import data from '../data.json'
const RecipeDetail = () => {
    const { id} = useParams()
    const [recipe,setRecipe] = useState('');
    

    
    useEffect(()=>{
        const checkRecipe = data.find((item)=>{
          return item.id === parseInt(id)
        });
        setRecipe(checkRecipe || null);

    },[id])
    console.log(recipe.ingredients)
    if (!recipe) {<div>loading...</div>} 

    return ( 
    <div className="bg-gray-200  hover:bg-gray-50 rounded-lg shadow-xl w-auto m-4 ">
      <h1 className="text-red-700 text-2xl text-center font-bold">{recipe.title}</h1>
      <img className="w-96 rounded-xl m-2 flex justify-self-center" src={recipe.image} alt={recipe.title}/>
      <h2 className="text-xl font-bold text-red-700 ml-6  md:text-4xl md:text-center ">Ingredients</h2>
      <ul>
        {recipe.ingredients?.map((ingredient , index)=>(
        <li className="ml-3 text-xl italic md:text-2xl md:ml-36" key={index}>-{ingredient}</li>
      ))}
      </ul>
      <h2 className="text-xl font-bold text-red-700 ml-6 md:text-4xl md:text-center">instructions</h2>
      <ol>
        {recipe.instructions?.map((item)=>(
          <li className="ml-3 text-xl italic md:text-2xl md:ml-36">* {item}</li>
        ))}
      </ol>
    </div>
  );
}
 
export default RecipeDetail;