import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";

import { GlobalContext } from "../context/GlobalState";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState({});
    const [isRegistering, setIsRegistering] = useState(false);
    const [validation, setValidation] = useState("");
    const [signupValid, setSignupValid] = useState("");

    const { state, toggleForm } = useContext(GlobalContext);

    const validateValues = () => {
        let error = {};
        
        if(firstName.length === 0) {
            error.firstname = "First Name is required"
        }
        if(lastName.length === 0) {
            error.lastname = "Last Name is required"
        }
        if (email.length === 0) {
          error.email = "Email is required";
        }
        if (password.length === 0) {
          error.password = "Password is required";
        }
        return error;
    };

    const validateBeforeSignUp = () => {
        if(firstName.length > 0 
            && lastName.length > 0 
            && email.length > 0 
            && password.length > 0 
        ) {
            return setSignupValid(
                <p className="successLink">
                    You've successfully created an account.
                </p>
            );
        }
    }

    const handleSubmit  = async (event) => {
        event.preventDefault();
        if(!isRegistering) {
            setIsRegistering(true)
            try {
                await doCreateUserWithEmailAndPassword(email, password);
            } catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    setValidation("The email address is already in use");
                } else if (error.code === "auth/invalid-email") {
                    setValidation("The email address is not valid."); 
                } else if (error.code === "auth/weak-password") {
                    setValidation("Password not strong enough.");
                }      
            }
        }

        setErrorMessage(validateValues());
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        validateBeforeSignUp()
    }

    return (
        <>
            {signupValid}
            <div className="authContainer">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="signup-h2">Create an account</h2>
                        <Input 
                            label="First Name" 
                            id="first-name" 
                            type="text" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                        {
                            <p className="error">
                                {firstName.length === 0 ? errorMessage.firstname : null}
                            </p>
                        }
                        <Input 
                            label="Last Name" 
                            id="last-name" 
                            type="text" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                        {
                            <p className="error">
                                {lastName.length === 0 ? errorMessage.lastname : null}
                            </p>
                        }
                        <Input 
                            label="Email" 
                            id="email" 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        {
                            <p className="error">
                                {email.length === 0 ? errorMessage.email : null}
                            </p>
                        }
                        <Input 
                            label="Password" 
                            id="password" 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        {
                            <p className="error">
                                {password.length === 0 ? errorMessage.password : null}
                            </p>
                        }
                        <Button btnText="Signup" className="button" />
                    </div> 
                </form>
                <p className="validation" style={{display: "none"}}>{validation}</p>
                <p>
                    By clicking "Sign up" you agree to our 
                    <a href="http://"> Terms & Privacy Policy</a>
                </p>
                <div className="signupLabel">
                    {
                        state === "login" ? (
                            <p>
                                Don't have an account yet?
                                <span onClick={() => toggleForm("signup")}>
                                    <Link to="/"> Signup</Link>
                                </span>
                            </p>
                        ) : (
                            <p className="account-exist">
                                Already have an account?
                                <span onClick={() => toggleForm("login")}> 
                                    <Link to="/login"> Login</Link>
                                </span>
                            </p>
                        )  
                    }
                </div>
            </div>
        </>
    );
}

export default Signup;