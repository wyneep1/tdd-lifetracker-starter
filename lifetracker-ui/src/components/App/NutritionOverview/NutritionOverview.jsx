import { useContext } from "react";
import { Navigate } from "react-router-dom";
import * as React from "react";
import { Link } from "react-router-dom";
import NutritionFeed from "../NutritionFeed/NutritionFeed";
import AuthContext from "../../../../contexts/auth";
import NutritionContext from "../../../../contexts/nutrition"
import "./NutritionOverview.css"
export default function NutritionOverview() {
    //should call the useNutritionContext hook and extract all the necessary data from it.
    // const {auth} = useContext(AuthContext)
    const {nutritionContext, loadingContext, errorContext}= useContext(NutritionContext);
    const [nutritions, setNutritions] = nutritionContext
    const [isLoading, setIsLoading]= loadingContext
    const [error, setError] = errorContext
    console.log(nutritions)
    return (
        <div className="nutrition-overview">
            {/* {!auth && <Navigate to="/login" replace={true} />} */}
            <div className="nHeader">
                <h2 className='head'>Overview</h2>
                <Link to="/nutrition/create">
                    <button className="nBtn">Record Nutrition</button>
                </Link>
            </div>
            {error ? <span className="error">Something went wrong</span>: null}
            {isLoading ? <h3>Loading</h3> : <NutritionFeed nutritions={nutritions}/>}
        </div>
    );
}


 //   {isLoading ? <h3>Loading</h3> : <NutritionFeed nutritions={nutritions}/>}
 //link to nutrition feed