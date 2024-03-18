import { Link } from "react-router-dom";
import classes from "./NavList.module.css";

function NavList({ text, link, linkText, onClick }) {
    return (
        <>    
            <div onClick={onClick} style={{cursor: "pointer"}}>
                <p className={classes.text}>{text}</p>
                <Link to={link} className={classes.link}>
                    {linkText}
                </Link>
            </div>
        </>
    );
}  

export default NavList;