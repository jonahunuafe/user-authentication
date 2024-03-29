import Logo from "../images/istockphoto-1200899039-612x612.jpg";
import { useState } from "react";

import classes from "./MainNavigation.module.css";


function MainNavigation() {
    const [state, setState] = useState(false);


    const toggleState = () => {
        setState((prev) => !prev);
    };

    return (
        <>
            <header>
                <div className={classes.subHeader1}>
                    <img src={Logo} alt="logo" />
                    <h2 className={classes.thread}>Threadlist</h2>
                </div>

                <div className={classes.subHeader2}>
                    {state ? (
                            <div onClick={toggleState}>
                                <p>Don't have an account yet?</p>
                            </div>
                        ) : (
                            <div onClick={toggleState}>
                                <p>Already have an account?</p>
                            </div>  
                        )
                    }  
                </div>
            </header>
        </>
    );
}

export default MainNavigation;