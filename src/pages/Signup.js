import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { GlobalContext } from "../context/GlobalState";

function Signup() {
    const [inputFields, setInputFields] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState({});

    const { state, toggleForm } = useContext(GlobalContext);

    let error = {};
    
    const validateValues = (inputValues) => {
        if(inputValues.firstName.length <= 0) {
            error.firstname = "First Name is required"
        }
        if(inputValues.lastName.length <= 0) {
            error.lastname = "Last Name is required"
        }
        if (inputValues.email.length <= 0) {
          error.email = "Email is required";
        }
        if (inputValues.password.length <= 0) {
          error.password = "Password is required";
        }
        return error;
    };

    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };


    function handleSubmit(event) {
        event.preventDefault();

        setErrorMessage(validateValues(inputFields));
        setInputFields({
            ...inputFields,
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        })
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="signup-h2">Create an account</h2>
                        <Input label="First Name" id="first-name" type="text" name="firstname" value={inputFields.firstName} onChange={handleChange} />
                        {
                            <p className="error">
                                {errorMessage.firstname}
                            </p>
                        }
                        <Input label="Last Name" id="last-name" type="text" name="lastname" value={inputFields.lastName} onChange={handleChange} />
                        {
                            <p className="error">
                                {errorMessage.lastname}
                            </p>
                        }
                        <Input label="Email" id="email" type="email" name="email" value={inputFields.email} onChange={handleChange} />
                        {
                            <p className="error">
                                {errorMessage.email}
                            </p>
                        }
                        <Input label="Password" id="password" type="password" name="password" value={inputFields.password} onChange={handleChange} />
                        {
                            <p className="error">
                                {errorMessage.password}
                            </p>
                        }
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