import { useState } from "react";
import Logo from "../images/istockphoto-1200899039-612x612.jpg";

import classes from "./MainNavigation.module.css";
import NavList from "./NavList";


function MainNavigation() {
    const [state, setState] = useState(false);

    const handleLogin = () => {
        setState(true);
    };
    
    const handleSignup = () => {
        setState(false);
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
                        <NavList 
                            text="Don't have an account yet?" 
                            linkText="Signup"
                            onClick={handleSignup} 
                        />
                        ) : (
                            <NavList 
                                text="Already have an account?"
                                linkText="Login"
                                onClick={handleLogin}
                            />
                        )
                    }
                    
                </div>
            </header>
        </>
    );
}

export default MainNavigation;