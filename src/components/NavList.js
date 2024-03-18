import { Link } from "react-router-dom";

function NavList({ text, link, linkText, onClick }) {
    return (
        <>
            {text} 
            <div onClick={onClick} style={{cursor: "pointer"}}><Link to={link}>{linkText}</Link></div>
        </>
    );
}  

export default NavList;