import Logo from "../images/istockphoto-1200899039-612x612.jpg";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";


function MainNavigation() {

    return (
        <>
            <header>
                <div className={classes.subHeader1}>
                    <img src={Logo} alt="logo" />
                    <h2 className={classes.thread}>Threadlist</h2>
                </div>

                <div className={classes.subHeader2}>
                    { (
                            <div>
                                <p>
                                    <span>Already have an account? </span>
                                    <Link to="/">
                                        Signup
                                    </Link>
                                </p>
                            </div>
                        )  (
                            <div>
                                <p>
                                    <span>Don't have an account yet? </span>
                                    <Link to="/login">
                                        Login
                                    </Link>
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