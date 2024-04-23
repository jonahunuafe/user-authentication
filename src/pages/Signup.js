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
    const [submitting, setSubmitting] = useState(false);

    const { state, toggleForm } = useContext(GlobalContext);

    let errors = {};
    
    const validateValues = (inputValues) => {
        if(inputValues.firstname.length <= 0) {
            errors.firstname = "First Name is required"
        }
        if(inputValues.lastName.length <= 0) {
            errors.lastName = "Last Name is required"
        }
        if (inputValues.email.length <= 0) {
          errors.email = "Email is required";
        }
        if (inputValues.password.length <= 0) {
          errors.password = "Password is required";
        }
        return errors;
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
        setSubmitting(true);
    }

    return (
        <>
            <div className="container">
                {Object.keys(errors).length === 0 && submitting ? (
                    <span className="success">Successfully submitted ✓</span>
                ) : null}
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="signup-h2">Create an account</h2>
                        <Input label="First Name" id="first-name" type="text" name="firstname" value={inputFields.firstName} onChange={handleChange} />
                        {errorMessage.firstname && (
                            <p className="error">
                                {errorMessage.firstname}
                            </p>
                        )}
                        <Input label="Last Name" id="last-name" type="text" name="lastname" value={inputFields.lastName} onChange={handleChange} />
                        {errorMessage.lastName && (
                            <p className="error">
                                {errorMessage.lastName}
                            </p>
                        )}
                        <Input label="Email" id="email" type="email" name="email" value={inputFields.email} onChange={handleChange} />
                        {errorMessage.email && (
                            <p className="error">
                                {errorMessage.email}
                            </p>
                        )}
                        <Input label="Password" id="password" type="password" name="password" value={inputFields.password} onChange={handleChange} />
                        {errorMessage.password && (
                            <p className="error">
                                {errorMessage.password}
                            </p>
                        )}
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