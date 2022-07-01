import "./LoginPage.css"
import LoginForm from "./LoginForm/LoginForm"
export default function LoginPage(props){
    return(
        <div className="login-page">
           <LoginForm error={props.error} setError={props.setError} handleSubmittedLogin={props.handleSubmittedLogin}/>
        </div>
    )
}