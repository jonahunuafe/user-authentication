import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

import Input from "../components/Input";

function Login() {
    const [inputFields, setInputFields] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const { state, toggleForm } = useContext(GlobalContext);

 
    function handleSubmit(event) {
        event.preventDefault();

    }

    return (
        <>
            <div className="container">
                <h2 className="login-h2">Log in</h2>
                <form onSubmit={handleSubmit}>
                    <Input label="Email" id="email" type="email"   />
                    <Input label="Password" id="passord" type="password" />
                    <button className="loginBtn">Log in</button>
                    <p><Link to="/login/passwordreset">Forgot your password?</Link></p>
                </form>
                <div>
                    {
                        state === "login" ? (
                            <div>
                                <p>Don't have an account yet?
                                    <span onClick={() => toggleForm("signup")}> <Link to="/">Signup</Link></span>
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p>Already have an account?
                                    <span onClick={() => toggleForm("login")}> <Link to="/login">Login</Link></span>
                                </p>
                            </div>
                        )  
                    }
                </div>
            </div>
        </>
    );
} 
export default Login;