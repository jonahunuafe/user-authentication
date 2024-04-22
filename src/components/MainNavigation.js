import Logo from "../images/istockphoto-1200899039-612x612.jpg";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
function MainNavigation() {
    const  { state, toggleForm } = useContext(GlobalContext);

    return (
        <>
            <header>
                <div className={classes.subHeader1}>
                    <img src={Logo} alt="logo" />
                    <h2 className={classes.thread}>Threadlist</h2>
                </div>

                <div className={classes.subHeader2}>
                    {
                        state === "login" ? (
                        <div>
                            <p>Don't have an account yet? <span onClick={() => toggleForm("signup")}><Link to="/">Signup</Link></span></p>
                        </div>
                    ) : (
                        <div>
                            <p>Already have an account? <span onClick={() => toggleForm("login")}><Link to="/login">Login</Link></span></p>
                        </div>
                    )  
                    }
                </div>
            </header>
        </>
    );
}

export default MainNavigation;