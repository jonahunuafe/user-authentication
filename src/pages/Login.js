import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

import Input from "../components/Input";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { state, toggleForm } = useContext(GlobalContext);

    const navigate =useNavigate();

    function navigateHandler() {
        navigate(state === "login" ? "/" : "/login");
    }

 
    function handleSubmit(event) {
        event.preventDefault();

        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className="container">
                <h2 className="login-h2">Log in</h2>
                <form onSubmit={handleSubmit}>
                    <Input label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}   />
                    <Input label="Password" id="passord" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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