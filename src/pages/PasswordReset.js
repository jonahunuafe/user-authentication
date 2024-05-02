import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { doPasswordReset } from "../firebase/auth";

import Input from "../components/Input";
import Button from "../components/Button";

function PasswordReset() {
    const [email, setEmail] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [validation, setValidation] = useState("");

    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/");
    }
    
    const validateValues = () => {
        let error = "";

        if (email.length === 0) {
            error = "Email required";
        } else if (email.length > 0) {
            return <p className="successLink">Successfully sent reset link to your email address.</p>
        }
        return error;   
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doPasswordReset(email);
            } catch (error) {
                if(error.code === "auth/missing-email") {
                    setValidation("(*not optional)");
                }
            }
        }

        setErrorMessage(validateValues());
        setEmail("");
    }

    return (
        <div className="authContainer">
            <form onSubmit={handleSubmit}>
                <h2 className="reset-h2">Send password reset link</h2>
                <h4 className="reset-h4">We'll send a reset link to your email</h4>
                <Input 
                    label="Email" 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <p className="error">{email.length === 0 && errorMessage }</p>
                <span className="resetValidationError" style={{display: "none"}}>
                    {validation}
                </span>
                <Button btnText="Send" className="button" type="submit" />
            </form>
            <Button 
                onClick={navigateHandler} 
                className="backToLogin" 
                type="button"
            >
                Back to Signup
            </Button>
        </div> 
    );
}

export default PasswordReset;