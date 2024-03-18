import { Link } from "react-router-dom";

function NavList({ text, link, linkText }) {
    return (
        <>
            {text} <Link to={link}/> {linkText}
        </>
    );
}  

export default NavList;