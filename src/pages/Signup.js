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

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.email.length < 15) {
          errors.email = "Email is too short";
        }
        if (inputValues.password.length < 5) {
          errors.password = "Password is too short";
        }
        return errors;
    };


    function handleSubmit(event) {
        event.preventDefault();

    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="signup-h2">Create an account</h2>
                        <Input label="First Name" id="first-name" type="text" name="firstname" />
                        <Input label="Last Name" id="last-name" type="text" name="lastname" />
                        <Input label="Email" id="email" type="email" name="email" />
                        <Input label="Password" id="password" type="password" name="password" />
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