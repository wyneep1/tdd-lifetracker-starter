import * as React from "react"
import "./App.css"
import Navbar from "components/App/Navbar/Navbar"
import LoginPage from "components/App/LoginPage"
import LandingPage from "components/App/LandingPage/LandingPage"
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import RegistrationPage from "./RegistrationPage/RegistrationPage"
import NutritionPage from "./NutritionPage/NutritionPage"
import ActivityPage from "./ActivityPage/ActivityPage"
import Sleep from "./Sleep/Sleep"
import NotFound from "components/NotFound/NotFound"
import { useState } from "react"
import AuthContext from "../../../contexts/auth"
import { useContext } from "react"
import axios from "axios"
import {API_BASE_URL} from "../../../constants"

export default function App() {

  const{auth, setAuth} = useContext(AuthContext)
  const [isLogged, setIsLogged] = useState(false);
  const[error, setError] = useState("")

  function handleLogin(e){
    setAuth(false)
  }


  async function handleSubmittedLogin(email, password){
      const response = await axios.post(`${API_BASE_URL}/auth/login/`,
      {email: email, password: password}).then((res) =>{
        setAuth(true);
        return res.data})
        .catch((error)=>{
          setError(error.response.data.error.message)
        })
        console.log(response);
        return response;
  };

   async function handleRegistration(username, password, email, first_name, last_name){
        const response = await axios.post(`${API_BASE_URL}/auth/register/`,
        {username: username, password: password, email: email, first_name: first_name, last_name: last_name}).then((res) => {
          console.log("auth is", auth)
          setAuth(true);
            return res.data })
          .catch((error)=>{
           setError(error.response.data.error.message)
            console.log(error.response)
          })

          console.log(response);
          return response;
  }



  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
        <Navbar auth={auth} setAuth={setAuth} handleLogin={handleLogin} isLogged={isLogged} setIsLogged={setIsLogged}/>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<LoginPage handleSubmittedLogin={handleSubmittedLogin} error={error} setError={setError} isLogged={isLogged} setIsLogged={setIsLogged} handleLogin={handleLogin}/>} />
            <Route path="/register" element={<RegistrationPage handleRegistration={handleRegistration} error={error} setError={setError} isLogged={isLogged} setIsLogged={setIsLogged} handleLogin={handleLogin}/>} />
            <Route path="/activity" element={<ActivityPage isLogged={isLogged} setIsLogged={setIsLogged} handleLogin={handleLogin}/>}/>
            <Route path="/nutrition/*" element ={<NutritionPage/>}/>
            <Route path="/sleep" element = {<Sleep/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
        </BrowserRouter>
        </React.Fragment>
    </div>
  )
}
