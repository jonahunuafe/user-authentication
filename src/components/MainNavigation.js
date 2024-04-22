import Logo from "../images/istockphoto-1200899039-612x612.jpg";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

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
                            <p>state.text1<span onClick={() => toggleForm("signup")}> Signup</span></p>
                        </div>
                    ) : (
                        <div>
                            <p>state.text2<span onClick={() => toggleForm("login")}> Login</span></p>
                        </div>
                    )  
                    }
                </div>
            </header>
        </>
    );
}

export default MainNavigation;