import { Link } from "react-router-dom";

import Input from "../components/Input";
import MainNavigation from "../components/MainNavigation";

function Login() {
 
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <MainNavigation />
            <div className="container">
                <h2 className="login-h2">Log in</h2>
                <form onSubmit={handleSubmit}>
                    <Input label="Email" id="email" type="email" />
                    <Input label="Password" id="passord" type="password" />
                    <button className="loginBtn">Log in</button>
                    <p><Link to="/login/passwordreset">Forgot your password?</Link></p>
                </form>
                <p>Don't have an account yet? <Link to="/">Sign up</Link></p>
            </div>
        </>
    );
} 
export default Login;