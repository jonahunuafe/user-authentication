import React, { useState } from "react";

import Input from "../components/Input";
import MainNavigation from "../components/MainNavigation";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(event) {
        event.preventDefault();

        console.log(firstName, lastName, email, password);

    }

    return (
        <>
            <MainNavigation />
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

                <div>
                    <p>By clicking "Sign up" you agree to our <a href="http://">Terms & Privacy Policy</a></p>
                    <button>Already have an account? Log in</button>
                </div>
            </div>
        </>
    );
}

export default Signup;