import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavList.module.css";

function NavList({ text, onClick }) {
    const [link, setLink] = useState(false);
    return (
        <>    
            <p>{text} <Link to="" className={classes.link}>{link ? "Signup" : "Login"}</Link></p>
        </>
    );
}  

export default NavList;