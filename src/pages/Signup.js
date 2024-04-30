import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { doCreateUserWithEmailAndPassword, doSendEmailVerification } from "../firebase/auth";

import { GlobalContext } from "../context/GlobalState";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState({});
    const [isRegistering, setIsRegistering] = useState(false);

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

    const handleSubmit  = async (event) => {
        event.preventDefault();
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password);
        }

        setErrorMessage(validateValues());
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
    }

    return (
        <>
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