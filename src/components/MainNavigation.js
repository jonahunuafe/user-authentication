import Logo from "../images/istockphoto-1200899039-612x612.jpg";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";
import { useAuth } from "../firebaseContext/authContext";

import classes from "./MainNavigation.module.css";
function MainNavigation() {
    const  { state, toggleForm } = useContext(GlobalContext);
    const { userLoggedIn } = useAuth();

    const navigate = useNavigate();

    function handleNavigate() {
        doSignOut();
        navigate("/");
    }

    return (
        <>
            <header>
                <div className={classes.subHeader1}>
                    <img src={Logo} alt="logo" />
                    <h2 className={classes.thread}>Threadlist</h2>
                </div>

                <div>
                    {userLoggedIn && state ? 
                        (
                            <button onClick={handleNavigate} className="logoutBtn">
                                Logout
                            </button>
                        ) : (
                            <div className={classes.subHeader2}>
                            {
                                state === "login" ? 
                                (
                                    <>
                                        <p>Don't have an account yet?</p>
                                        <span onClick={() => toggleForm("signup")}>
                                            <Link to="/"> Signup</Link>
                                        </span> 
                                    </>  
                                ) : (
                                    <>
                                        <p>Already have an account?</p>
                                        <span onClick={() => toggleForm("login")}>
                                            <Link to="/login"> Login</Link>
                                        </span>
                                    </>
                                )  
                            }
                            </div>
                        )
                    }
                </div>
            </header>
        </>
    );
}

export default MainNavigation;