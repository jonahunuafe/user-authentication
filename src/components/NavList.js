import { Link } from "react-router-dom";
import classes from "./NavList.module.css";

function NavList({ text, link, linkText, onClick }) {
    return (
        <>    
            <div>
                <p className={classes.text}>{text}</p>
                <div onClick={onClick}>
                    <Link to={link} className={classes.link}>
                        {linkText}
                    </Link>
                </div>
            </div>
        </>
    );
}  

export default NavList;