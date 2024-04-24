import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import classes from "../styles/globalstyle.css";

import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
    const [inputFields, setInputFields] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState({});
    const { state, toggleForm } = useContext(GlobalContext);

    let error = {};

    const validateValues = (inputValues) => {
        if(inputValues.email.length <= 0) {
            error.email = "Email is required"; 
        }
        if(inputValues.password.length <= 0) {
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

    function handleSubmit(event) {
        event.preventDefault();

        setErrorMessage(validateValues(inputFields));
        setInputFields({
            ...inputFields,
            email: "",
            password: ""
        })
    }

    return (
        <>
            <div className="authContainer">
                <h2 className="login-h2">Log in</h2>
                <form onSubmit={handleSubmit}>
                    <div className={classes.container}>  
                    <Input label="Email" id="email" type="email" name="email" value={inputFields.email} onChange={handleChange} />
                    {
                        <p className="error">
                            {errorMessage.email}
                        </p>
                    }
                    <Input label="Password" id="passord" type="password" name="password" value={inputFields.password} onChange={handleChange} />
                    {
                        <p className="error">
                            {errorMessage.password}
                        </p>
                    }
                    <Button btnText="Login" className="button" />
                    <p><Link to="/login/passwordreset">Forgot your password?</Link></p>
                    </div>
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