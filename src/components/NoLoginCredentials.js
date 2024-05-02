import { Link } from "react-router-dom";
function NoLoginCredentials() {
    return (
        <div className="loginErrorContainer">
            <div>    
                <p>You can't login without providing user credentials</p>
            </div>
            <p>
                <Link to="/login">
                    Back to Login Page
                </Link>
            </p>
        </div>
    );
}  

export default NoLoginCredentials;