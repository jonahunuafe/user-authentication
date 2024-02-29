import Button from "./Button";

function Login() {
    return (
        <div>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
                <Button>Log in</Button>
                <p><a href="http://">Forgot your password?</a></p>
                <p>Don't have an account yet?<a href="http://">Sign up</a></p>
            </form>
        </div>
    );
} 
export default Login;