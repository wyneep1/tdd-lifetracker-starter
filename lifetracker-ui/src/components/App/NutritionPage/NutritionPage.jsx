import React from 'react'
import AuthContext from '../../../../contexts/auth'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import NutritionContext from '../../../../contexts/nutrition'
import {Routes, Route} from 'react-router-dom';
import NutritionOverview from '../NutritionOverview/NutritionOverview'
import NutritionNew from '../NutritionNew/NutritionNew'
import NutritionDetail from '../NutritionDetail/NutritionDetail'
import "./NutritionPage.css"
//import NotFound from "components/NotFound/NotFound"


export default function NutritionPage(){
    const {auth} = useContext(AuthContext)
    const {nutritionContext, loadingContext, errorContext}= useContext(NutritionContext);
    const [nutritions, setNutritions] = nutritionContext
    
    return(
        <div className="nutrition-page">
            {!auth && <Navigate to="/login" replace={true} />}
            <h1> Nutrition Page </h1>
            <Routes>
              <Route path="/" element={<NutritionOverview/>}/>
                <Route path="/create" element={<NutritionNew/>}/>
                <Route path="/id/:nutritionId" element={<NutritionDetail/>}/>
            </Routes>
        </div>
    )
}

//nutrition overview
 // <Route path="*" element={<NotFound/>}/>