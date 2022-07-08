import * as React from "react";
import NutritionCard from "../NutritionCard/NutritionCard";

//import NutritionCard from "components/NutritionCard/NutritionCard";
export default function NutritionFeed(props) {
    //state to check if user is logged in
    console.log("nutrition data:", props.nutritions)         
    return (
        <div className="nutrition-feed">
            {!props?.nutritions?.length >0 ? (<div className="empty">
                <h2 className="empty"> Nothing here yet </h2> </div>) : (props.nutritions?.map((nutrition) => {
                return <NutritionCard  nutrition={nutrition} key={nutrition.id}/>

            }))}    

           
        </div>
    )
}
