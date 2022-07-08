import * as React from "react";
import apiClient from "../../../../services/apiClient";
import { useEffect, useContext} from "react";
import NutritionCard from "../NutritionCard/NutritionCard";
import NotFound from "components/NotFound/NotFound"
import { useParams } from "react-router-dom";
import NutritionContext from "../../../../contexts/nutrition";

export default function NutritionDetail() {

    //state to check if user is logged in
    const [nutrition, setNutrition] = React.useState({})
    const {nutritionContext, loadingContext, errorContext}= useContext(NutritionContext);
    const [nutritions, setNutritions] = nutritionContext
    const [isLoading, setIsLoading]= loadingContext
    const [error, setError] = errorContext

    const {nutritionId} = useParams()
   // //query where id = nutritonID
 useEffect(async () => {
    setIsLoading(true)

    const {data, error} = await apiClient.fetchNutritionById(nutritionId)
            
    if (error){
        setError(error)
    }else{
        setNutrition(data.result)
    }
    
    setIsLoading(false)

}, [])

console.log(isLoading)
    return (
        <div className="nutrition-detail">
            {(!isLoading && nutrition) ? <NutritionCard nutrition={nutrition} /> : <h1>Loading ...</h1>}
        </div>
    );
}