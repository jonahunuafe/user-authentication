import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

function PasswordReset() {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/login");
    }

    let error = "";

    const validateValues = () => {
        if (email.length === 0) {
          error = "Email is required";
        }
        return error;
    };

    function handleSubmit(event) {
        event.preventDefault();

        setErrorMessage(validateValues());
        setEmail("")
    }

    return (
        <div className="authContainer">
            <form onSubmit={handleSubmit}>
                <h2 className="reset-h2">Send password reset link</h2>
                <h4 className="reset-h4">We'll send a reset link to your email</h4>
                <Input label="Email" id="email" type="email" />
                {email.length === 0 ? errorMessage : null}
                <Button btnText="Send" className="button" />
                <Button onClick={navigateHandler} className="backToLogin">Back to Login</Button>
            </form>
        </div> 
    );
}

export default PasswordReset;