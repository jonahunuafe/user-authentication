import { Link } from "react-router-dom";

import Button from "../components/Button";

function Login() {
 
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
                <p><Link to="/login/passwordreset">Forgot your password?</Link></p>
                <Button>Log in</Button>
                <p>Don't have an account yet?<a href="http://">Sign up</a></p>
            </form>
        </div>
    );
} 
export default Login;