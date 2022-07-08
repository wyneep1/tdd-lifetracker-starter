import * as React from "react"
import "./LoginForm.css"
import {Link, Navigate} from "react-router-dom"
import { useContext, useState } from "react"
import AuthContext from "../../../../contexts/auth"
import apiClient from "../../../../services/apiClient"

export default function LoginForm(props){

  const{auth, setAuth} = useContext(AuthContext)
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  function handleChange(e){
    e.preventDefault();
    let value = e.target.value;
    switch(e.target.name){
      case "email": setEmail(value);
          break;
      case "password": setPassword(value);
          break;
  }
}
async function signUp(e){
  e.preventDefault();
  const { data, error} = await apiClient.loginUser({email: email, password: password})
  if(error) {
    props.setError(error)
    }
    if(data?.user) {
      setAuth(true)
      apiClient.setToken(data.token);

  }
}



    return(
        <div className="login-form">
          {auth && <Navigate to="/activity" replace={true} />}
        <h1 className="login">Login</h1>
        <form className="login-time">
            <span className ="email">Email</span>
            <input onChange={handleChange} className="form-input" placeholder="user@gmail.com" name="email" type="email" value={email}></input>

            <span className="password">Password</span>
            <input onChange={handleChange} className="form-input" placeholder="Type in your password" name="password" type="password" value={password}></input>
            <div className="error">
                  {props.error ? <p> {props.error} </p> : null}
                </div>
            <button className="submit-login" onClick={signUp}>Login</button>
            <div className="footer">
          <p>
            Don't have an account? Sign up <Link className="sign-up" to ="/register">here.</Link> 
          </p>
          </div>
        </form>
        </div>

    )
}