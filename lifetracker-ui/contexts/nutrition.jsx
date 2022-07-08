import { createContext, useState, useEffect, useContext } from "react"
import apiClient from "../services/apiClient"
import AuthContext from "./auth";
console.log("hello")
const NutritionContext = createContext({});
export const NutritionContextProvider = ({children})=>{
    console.log("hello")
    //const [auth, setAuth] = useState(false)
    const [nutritions, setNutritions] =useState([]);
    const [initialized, setInitialized] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const {auth, setAuth}= useContext(AuthContext)
//should call the useAuthContext
//react.useeffct hook
console.log(auth);

 useEffect(async ()=>{

    setIsLoading(true)
    console.log("reached 1")
    const {data, err} = await apiClient.fetchNutrition()
    console.log("reached 2")
    if(data){
        console.log(data);
        setNutritions(data.nutritions) 
    }else if(err){
    setError(err)
    console.log("reached 3")
    }
    setIsLoading(false)
    setInitialized(true)

   }, [])

const values={errorContext: [error, setError], nutritionContext: [nutritions, setNutritions], loadingContext: [isLoading, setIsLoading], initializedContext: [initialized, setInitialized]}
   
return(
        <NutritionContext.Provider value={values}>
            {children}
        </NutritionContext.Provider>
    )
}

export default NutritionContext;