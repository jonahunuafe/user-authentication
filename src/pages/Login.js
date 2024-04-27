import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
// import { doLogInWithEmailAndPassword } from "../firebase/auth";
// import { useAuth } from "../firebaseContext/authContext";
// import { AuthContext } from "../firebaseContext/authContext";

import { GlobalContext } from "../context/GlobalState";

function Login() {
    // const { userLoggedIn } = useAuth();
    // const {userLoggedIn} = useContext(AuthContext);
    
    const [inputFields, setInputFields] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState({});
    // const [isSigningIn, setIsSigningIn] = useState(false);
    
    const { state, toggleForm } = useContext(GlobalContext);

    
    const validateValues = (inputValues) => {
        let error = {};
        
        if(inputValues.email.length === 0) {
            error.email = "Email is required"; 
        }
        if(inputValues.password.length === 0) {
            error.password = "Password is required";
        }
        return error;
    }

    const handleChange = (event) => {
        setInputFields({
            ...inputFields,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // if(!isSigningIn) {
        //     setIsSigningIn(true);
        //     await doLogInWithEmailAndPassword(inputFields.email, inputFields.password);
        // }

        setErrorMessage(validateValues(inputFields));
        setInputFields({
            ...inputFields,
            email: "",
            password: ""
        })
    }
    
    return (
        <>
            {/* {userLoggedIn && (<Navigate to={"/home"} replace = {true} />)} */}
            <div className="authContainer">
                <h2 className="login-h2">Log in</h2>
                <form onSubmit={handleSubmit}>
                    <Input 
                        label="Email" 
                        id="email" 
                        type="email" 
                        name="email" 
                        value={inputFields.email} 
                        onChange={handleChange} 
                    />
                    {
                        <p className="error">
                            {inputFields.email.length === 0 ? errorMessage.email : null}
                        </p>
                    }
                    <Input 
                        label="Password" 
                        id="passord" 
                        type="password" 
                        name="password"
                        value={inputFields.password} 
                        onChange={handleChange} 
                    />
                    {
                        <p className="error">
                            {inputFields.password.length === 0 ? errorMessage.password : null}
                        </p>
                    }
                    <Button btnText="Login" className="button" />
                </form>
                <p><Link to="/login/passwordreset">Forgot your password?</Link></p>
                <div>
                    {
                        state === "login" ? (
                            <p>
                                Don't have an account yet?
                                <span onClick={() => toggleForm("signup")}> 
                                    <Link to="/"> Signup</Link>
                                </span>
                            </p>  
                        ) : (
                            <p>Already have an account?
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
export default Login;