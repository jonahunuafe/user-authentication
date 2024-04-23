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
        if (inputValues.email.length < 15) {
          errors.email = "Email is too short";
        }
        if (inputValues.password.length < 5) {
          errors.password = "Password is too short";
        }
        return errors;
    };

    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };


    function handleSubmit(event) {
        event.preventDefault();

        setErrorMessage(validateValues(inputFields));
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
                        {errorMessage.email ? (
                            <p className="error">
                                Email should be at least 15 characters long
                            </p>
                        ) : null}
                        <Input label="Last Name" id="last-name" type="text" name="lastname" value={inputFields.lastName} onChange={handleChange} />
                        <Input label="Email" id="email" type="email" name="email" value={inputFields.email} onChange={handleChange} />
                        <Input label="Password" id="password" type="password" name="password" value={inputFields.password} onChange={handleChange} />
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