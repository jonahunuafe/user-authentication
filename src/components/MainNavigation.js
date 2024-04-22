import React, { useState } from "react";
import Logo from "../images/istockphoto-1200899039-612x612.jpg";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
function MainNavigation() {
    const [currentForm, setCurrentForm] = useState("login");

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <>
            <header>
                <div className={classes.subHeader1}>
                    <img src={Logo} alt="logo" />
                    <h2 className={classes.thread}>Threadlist</h2>
                </div>

                <div className={classes.subHeader2}>
                    {
                        currentForm ? (
                        <div>
                            <p>Don't have an account yet? <span><Link to="/">Signup</Link></span></p>
                        </div>
                    ) : (
                        <div>
                            <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
                        </div>
                    )  
                    }
                </div>
            </header>
        </>
    );
}

export default MainNavigation;