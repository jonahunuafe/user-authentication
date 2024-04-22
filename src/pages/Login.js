import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

import Input from "../components/Input";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { toggleForm } = useContext(GlobalContext);

 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(email, password);
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
                <p>Don't have an account yet? <span onClick={() => toggleForm("signup")}>Sign up</span></p>
            </div>
        </>
    );
} 
export default Login;