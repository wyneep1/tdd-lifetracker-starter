import * as React from "react"
import "./Navbar.css"
import {Link} from 'react-router-dom'
import NavLinks from "../NavLinks/NavLinks"
export default function Navbar(props){
    return(
        <nav className="navbar">
            <div className ="content">
                <div className ="logo">
                <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVuqsRX__sah-RrnPxDtyrAx0dp_lFC5bkxBqL91bN1odDL4jPhsfOIdG5r-szVDdFLs&usqp=CAU" alt="store logo" id="logo-img"/></Link>
                </div>
                <NavLinks auth={props.auth} handleLogin={props.handleLogin} setAuth={props.setAuth} isLogged={props.isLogged} setIsLogged={props.setIsLogged}/>
            </div>
            
        </nav>
    )
}