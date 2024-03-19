import Logo from "../images/istockphoto-1200899039-612x612.jpg";


import classes from "./MainNavigation.module.css";
import NavList from "./NavList";


function MainNavigation() {
    

    return (
        <>
            <header>
                <div className={classes.subHeader1}>
                    <img src={Logo} alt="logo" />
                    <h2 className={classes.thread}>Threadlist</h2>
                </div>

                <div className={classes.subHeader2}>
                    {(
                        <NavList 
                            text="Already have an account" 
                            link="" 
                            linkText="Log in" 
                            onClick=""
                        />)  (
                        <NavList 
                            text="Don't have an account yet?" 
                            link=""
                            linkText="Sign up" 
                            onClick=""
                        />)
                    }
                </div>
            </header>
        </>
    );
}

export default MainNavigation;