import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavList.module.css";

function NavList({ text, link , onClick }) {
    const [linkText, setLinkText] = useState(false);

    function toggleLinkText() {
        if(!linkText) {
            setLinkText((prev) => !prev);
            onClick();
        }
    }

    return (
        <>    
            <div>{text} <div><Link to={link} onClick={toggleLinkText} className={classes.link}>{linkText ? "Signup" : "Login"}</Link></div></div>
        </>
    );
}  

export default NavList;