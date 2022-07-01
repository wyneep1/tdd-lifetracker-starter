
import RegistrationForm from "../RegistrationForm/RegistrationForm"
export default function RegistrationPage(props){
    
    return(
        <div className="registration-page">
            <RegistrationForm error={props.error} setError={props.setError} handleRegistration={props.handleRegistration}/>
        </div>
    )
}