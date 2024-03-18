import { useState } from "react";

// import Logo from "../images/istockphoto-1200899039-612x612.jpg"

import classes from "./MainNavigation.module.css";
import NavList from "./NavList";


function MainNavigation() {
    const [state, setState] = useState(false);

    function toggleState() {
        if(state) {
            setState(false)
        } else {
            setState(true);
        }
    }

    return (
        <>
            <header>
                <div>
                    {/* <img src={Logo} alt="logo" /> */}
                    <h2 className={classes.thread}>Threadlist</h2>

                    {!state ? <NavList text="Already have an account?" link="/" textLink="Log in" /> : 
                        <NavList text="Don't have an account yet" link="/login" textLink="Sign up" />
                    }
                </div>
            </header>
        </>
    );
}

export default MainNavigation;