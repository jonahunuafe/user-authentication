import { Link } from "react-router-dom";

import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
 
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input label="Email" id="email" type="email" />
                <Input label="password" id="passord" type="password" />
                <p><Link to="/login/passwordreset">Forgot your password?</Link></p>
                <Button>Log in</Button>
                <p>Don't have an account yet?<Link to="/">Sign up</Link></p>
            </form>
        </div>
    );
} 
export default Login;