import React from 'react'
import AuthContext from '../../../../contexts/auth'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

export default function NutritionPage(){
    const {auth} = useContext(AuthContext)
    return(
        <div className="nutrition-page">
            {!auth && <Navigate to="/login" replace={true}/>}
            <h1> Nutrition Page </h1>
            <h2> Overview </h2>
            <div> Nothing Here Yet </div>
           
        </div>
    )
}