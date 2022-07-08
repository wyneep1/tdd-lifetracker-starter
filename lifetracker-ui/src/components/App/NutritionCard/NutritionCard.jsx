import * as React from "react"
import "./NutritionCard.css"

export default function NutritionCard(props) {
    //state to check if user is logged in
    return (
        <div className="nutrition-card" key ={props.nutrition.id}>
            <div className="nutrition-name">{props.nutrition.name}</div>
            <div>
                <img className="nutrition-image" src={props.nutrition.image_url} alt="" />
            </div>
            <div className="nutrition-calories">{props.nutrition.calories}</div>
            <div className="nutrition-category">{props.nutrition.category}</div>
            <div className="nutrition-date">{props.nutrition.created_at}</div>
        </div>
    );
}