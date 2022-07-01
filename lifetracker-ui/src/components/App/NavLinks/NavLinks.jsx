import * as React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import "./NavLinks.css"
export default function NavLinks(props){
    /*const navigate = useNavigate()
    function handleLogout(){
        props.setAuth(true)
        navigate("/")
    }*/

    return(
        <div className="nav-links">
            <Link className="nav-link" to="/activity"> Activity</Link>
            <Link className="nav-link" to="/nutrition/*"> Nutrition</Link>
            {(!props.auth) ? <Link className="nav-link" to="/login"> Login</Link>: null}
            {(props.auth) ? <Link className='nav-link' to="/" onClick={props.handleLogin}> Log Out</Link>: null}
            {(!props.auth) ? <Link className='nav-link'to="/register">Sign Up</Link>: null}
        </div>
    )
}
/*{(!props.isLogged) ? <Link to="/login"> Login</Link>: null}
            {(!props.isLogged) ? <Link to="/register">Sign Up</Link>: null}
            {(!props.isLogged) ? <Link to="/">Sign Out</Link>: null}*/