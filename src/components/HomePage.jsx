import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json"
function HomePage() {
    const[recipes, setRecipes] = useState([]);
useEffect(()=>{
    setRecipes(data);
},[]);
    return(
        <div className=" grid grid-cols-2 grid-rows-2">
            {recipes.map(item =>(
            <Link to={`/recipe/${item.id}`}>

                <div kye={item.id} className=" transition ease-in duration-200 m-6 bg-gray-200 hover:bg-gray-100 shadow-md rounded-md  w-auto ml-4 mt-3 p-2 " key={item.id}>
                    <div className=" grid md:grid-cols-3 sm:flex">
                     <img className=" w-44 h-40 rounded-lg hover:shadow-2xl lg:w-72 lg:h-72 md:rounded-3xl transform hover:scale-95 transition ease-in duration-100" src={item.image} alt={item.title} />
                    <div className="grid grid-cols-1">
                     <h2 className=" text-2xl font-bold text-orange-700 pl-3 lg:text-4xl md:text-center md:m-4">{item.title}</h2>
                     <p className="text-lg pl-2 font-semibold lg:text-2xl">{item.summary}</p>
                    </div>
                     </div>
                </div>
            </Link>

            ))}
        </div>
    )

}
export default HomePage;