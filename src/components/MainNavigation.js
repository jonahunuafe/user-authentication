import Logo from "../images/istockphoto-1200899039-612x612.jpg";

import { useState } from "react";

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
                    <div className={classes.subHeader1}>
                        <img src={Logo} alt="logo" />
                        <h2 className={classes.thread}>Threadlist</h2>
                    </div>

                    <div className={classes.subHeader2}>
                        {!state ? (
                            <NavList 
                                text="Already have an account?" 
                                link="/" 
                                linkText="Log in" 
                                onClick={toggleState} 
                            />) : (
                            <NavList 
                                text="Don't have an account yet" 
                                link="/login" 
                                linkText="Sign up" 
                                onClick={toggleState} 
                            />)
                        }
                    </div>
            </header>
        </>
    );
}

export default MainNavigation;