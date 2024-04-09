import Logo from "../images/istockphoto-1200899039-612x612.jpg";
import { useState } from "react";
// import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";


function MainNavigation() {
    const [state, setState] = useState(false);
    // const [link, setLink] = useState("/login");


    const toggleState = () => {
        setState((prevState) => !prevState);
    };

    return (
        <>
            <header>
                <div className={classes.subHeader1}>
                    <img src={Logo} alt="logo" />
                    <h2 className={classes.thread}>Threadlist</h2>
                </div>

                <div className={classes.subHeader2}>
                    {!state ? (
                            <div>
                                <p>
                                    <span>Already have an account? </span>
                                    <span onClick={() => toggleState()}> 
                                        <a href="/">
                                            Signup
                                        </a>
                                    </span>
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p>
                                    <span>Don't have an account yet? </span>
                                    <span onClick={() => toggleState()}>
                                        <a href="/login">
                                            Login
                                        </a>
                                    </span>
                                </p>
                            </div>
                        )
                    }  
                </div>
            </header>
        </>
    );
}

export default MainNavigation;