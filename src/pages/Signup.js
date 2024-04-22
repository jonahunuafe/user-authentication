import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { GlobalContext } from "../context/GlobalState";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { state, toggleForm } = useContext(GlobalContext);


    function handleSubmit(event) {
        event.preventDefault();

        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="signup-h2">Create an account</h2>
                        <Input label="First Name" id="first-name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <Input label="Last Name" id="last-name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        <Input label="Email" id="email" type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                        <Input label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button className="signUpBtn">Sign Up</button>
                    </div> 
                </form>

                <p>By clicking "Sign up" you agree to our <a href="http://">Terms & Privacy Policy</a></p>
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

export default Signup;