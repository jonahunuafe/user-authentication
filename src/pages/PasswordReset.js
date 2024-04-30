import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../firebaseContext/authContext";
import { doPasswordReset } from "../firebase/auth";

import Input from "../components/Input";
import Button from "../components/Button";

function PasswordReset() {
    const { userLoggedIn, setUserLoggedIn } = useAuth();

    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [validation, setValidation] = useState(false);

    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/");
    }
    
    const validateValues = () => {
        let error = "";

        if (email.length === 0) {
          error = "Email is required";
        }
        return error;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(userLoggedIn) {
            setIsSigningIn(true);
            setUserLoggedIn(true);
            try {
                await doPasswordReset(email);
            } catch (error) {
                if(error.code === "auth/missing-email") {
                    setValidation("Missing email address");
                }
            }
        }

        setErrorMessage(validateValues());
        setEmail("");
    }

    return (
        <div className="authContainer">
            {isSigningIn && 
                <p className="resetLink">
                    A reset link has being sent to your email
                </p>
            }
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
                <p className="error">
                    {email.length === 0 ? errorMessage : null}
                </p>
                <Button btnText="Send" className="button" type="submit" />
            </form>
            {validation}
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