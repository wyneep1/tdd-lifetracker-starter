import { useState, useContext } from "react"
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../contexts/auth";
import apiClient from "../../../../services/apiClient";
import "./NutritionForm.css"
import NutritionContext from "../../../../contexts/nutrition";
export default function NutritionForm(){
    const{auth, setAuth} = useContext(AuthContext);
    const {nutritionContext, loadingContext, errorContext}= useContext(NutritionContext);
    const [nutritions, setNutritions] = nutritionContext
    const [isLoading, setIsLoading]= loadingContext
    const [error, setError] = errorContext

    const[name, setName]=useState("")
    const[calories, setCalories]=useState("")
    const[image_url, setImageUrl]=useState("")
    const[category, setCategory]=useState("")
    const[quantity, setQuantity]=useState("")
    const navigate = useNavigate()
    
    function handleChange(e){
        e.preventDefault();
       let value = e.target.value;
   
   switch(e.target.name){
       case "name": setName(value);
           break;
       case "calories": setCalories(value);
           break;
       case "imageUrl":setImageUrl(value);
           break;
       case "category":setCategory(value);
           break;
        case "quantity": setQuantity(value);
        break;
       }
   }

   async function handleSubmit(e){
    e.preventDefault();
        const {data, error} = await apiClient.createNutrition({ name: name, category: category, calories: calories, image_url: image_url, quantity: quantity})
        if(error) {
            setError(error)
        }
        if(data?.nutrition) {
            setAuth(true)
            setNutritions([...nutritions, data.nutrition])
            navigate("/nutrition")
            apiClient.setToken(data.token)
        }
   }
   //create a handle submit function for the information we are collecting


return(
    <div className="nutrition-form">
        {/* {auth&&<Navigate to="/nutrition" replace={true}/>} */}
    <h1>Record Nutrition</h1>
    <img src=""></img>
    <form>
    <div className="form-inputs">
    <div className="InputField">
        <label>Name</label>
        <input className="form-input" type="text" name="name" placeholder="Name" value={name} onChange={handleChange}/>
    </div>
    <div className="InputField">
        <label>Calories</label>
        <input className="form-input" type="number" name="calories" placeholder="1" value={calories} onChange={handleChange}/>
    </div>
    <div className="InputField">
        <label>Image Url</label>
        <input className="form-input" type="url" name="imageUrl" placeholder="http://www.food-image.com/1" value={image_url} onChange={handleChange}/>
    </div>
    <div className="InputField">
        <label>Category</label>
        <input className="form-input" type="text" name="category" placeholder="Category" value={category} onChange={handleChange}/>
    </div>
    <div className="InputField">
        <label>Quantity</label>
        <input className="form-input" type="number" name="quantity" placeholder="Quantity" value={quantity} onChange={handleChange}/>
    </div>
    </div>
    <button className="submit-nutrition" onClick={handleSubmit}>Save</button>
    </form>
</div>  
)
}