import { useState, useContext } from "react"
import { Navigate } from "react-router-dom";
import "./RegistrationForm.css"
import AuthContext from "../../../../contexts/auth";
export default function RegistrationForm(props){

const{auth} = useContext(AuthContext);
const[email, setEmail] = useState("")
const[username, setUsername]=useState("")
const[first_name, setFirstName]=useState("")
const[last_name, setLastName] = useState("")
const[password, setPassword] = useState("")
const[passwordConfirm, setPasswordConfirm] = useState("")

function handleChange(e){
     e.preventDefault();
    let value = e.target.value;

switch(e.target.name){
    case "email": setEmail(value);
        break;
    case "username": setUsername(value);
        break;
    case "first_name":setFirstName(value);
        break;
    case "last_name":setLastName(value);
        break;
    case "password":setPassword(value);
        break;
    case "passwordConfirm": setPasswordConfirm(value);
        break;
    }
}

async function signUp(e){
    e.preventDefault();
    if(password !=passwordConfirm){
        props.setError("Passwords don't match!")
        return;
    } else{
        props.setError("")
    }
    props.handleRegistration(username, password, email, first_name, last_name)
}


return(
    <form className='registration-form'>
            {auth&&<Navigate to="/activity" replace={true}/>}
            <div className="forms">
            <h1 className="registration">Register</h1>

            <span className = "input-title">Email</span>
            <div className='input-field'>
            <input onChange={handleChange} className='form-input' placeholder = "Enter a valid email" name = "email" type = "email" value={email} ></input>
            </div>

            <span className = "input-title">Username</span>
            <div className='input-field'>
            <input onChange={handleChange} className='form-input' placeholder = "your_username" name = "username" type = "text" value={username} ></input>
            </div>

            <div className = 'split-fields'>
                <input onChange={handleChange} className='form-input' placeholder = "First name" name = "first_name" type = "text" value={first_name} id='forming' ></input>
                <input onChange={handleChange} className='form-input' placeholder = "Last name" name = "last_name" type = "text" value={last_name} id='forming2'></input>
            </div>
            
            <span className = "input-title">Password</span>
            <div className='input-field'>
            <input onChange={handleChange} className='form-input' placeholder = "Enter a secure password" name = "password" type = "password" value={password} ></input>
            </div>

            <span className = "input-title">Confirm</span>
            <div className='input-field'>
            <input onChange={handleChange} className='form-input' placeholder = "Confirm your password" name = "passwordConfirm" type = "password" value={passwordConfirm}></input>
            </div>
            <div className="error">
                {props.error ? <p>{props.error}</p>: null}
            </div>
            <button className='submit-registration' onClick={signUp}>Create Account</button>
            
            <div className="footer">
            <p>
                Already have an account? Login <a className="login-here" href="/login">here</a>
            </p>
            </div>
            </div>  

            
        </form>  
)
}