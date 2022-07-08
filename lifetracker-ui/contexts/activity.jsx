import * as React from 'react'
import AuthContext from "./auth"
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import apiClient from '../services/apiClient'
import NutritionContext from './nutrition'
import { useContext } from 'react'
const ActivityContext = createContext({})

export const ActivityContextProvider = ({children})=> {

    const {auth, setAuth} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [activity, setActivity] = useState([])
    const [initialized, setInitialized] =useState(false)
    const [activity2, setActivity2]=useState([])
    const { nutritionContext } = useContext(NutritionContext)
    const [nutrition, setNutrition] = nutritionContext;

useEffect(async () => {
    setIsLoading(true)
    console.log("reached 1")
    try{
    const data = await apiClient.calculateDailyCaloriesSummaryStats()
    console.log(data)
    console.log("reached 2")
        setActivity(data.activity) 
    const response = await apiClient.calculatePerCategoryCaloriesSummaryStats()
    console.log(response)
    setActivity2(response.activity2)

} catch(err){
    setError(err)
    console.log("reached 3")
}
setIsLoading(false)
}, [auth, nutrition])


const values={errorContext: [error, setError], activityContext: [activity, setActivity], activityContext2: [activity2, setActivity2], loadingContext: [isLoading, setIsLoading], initializedContext: [initialized, setInitialized]}

return(
    <ActivityContext.Provider value={values}>
        {children}
    </ActivityContext.Provider>
)
}

export default ActivityContext;