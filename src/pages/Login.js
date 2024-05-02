import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { doLogInWithEmailAndPassword } from "../firebase/auth";
import { GlobalContext } from "../context/GlobalState";

import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState({});
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [validation, setValidation] = useState("");

    const { state, toggleForm } = useContext(GlobalContext);
    const navigate = useNavigate()

    function navigateHandler() {
        if(email.length > 0) {
            navigate("/home");
        }
        if (email.length === 0 || password.length === 0) {
            navigate("/loginerror")
        }
    }

    const validateValues = () => {
        let error = {};
        
        if(email.length === 0) {
            error.email = "Email is required"; 
        }
        if(password.length === 0) {
            error.password = "Password is required";
        }
        return error;
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!isSigningIn) {
           setIsSigningIn(true);
           try {
               await doLogInWithEmailAndPassword(email, password)
           } catch(error) {
                if(error.code === "auth/missing-email") {
                    setValidation("missing email");
                }
           }
        }
        
        setErrorMessage(validateValues());
        setEmail("")
        setPassword("")
        navigateHandler();
    }
    
    return (
        <>
            <div className="authContainer">
                <h2 className="login-h2">Log in</h2>
                <form onSubmit={handleSubmit}>
                    <Input 
                        label="Email" 
                        id="email" 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={(event) =>  setEmail(event.target.value)} 
                    />
                    {
                        <p className="error">
                            {email.length === 0 ? errorMessage.email : null}
                        </p>
                    }
                    <Input 
                        label="Password" 
                        id="passord" 
                        type="password" 
                        name="password"
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                    {
                        <p className="error">
                            {password.length === 0 ? errorMessage.password : null}
                        </p>
                    }
                    <Button btnText="Login" className="button" />
                </form>
                <p style={{display: "none"}}>{validation}</p>
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