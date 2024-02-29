import Button from "./Button"

function Signup() {
    return (
        <form>
            <div>
                <h2>Create an account</h2>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" required />
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
            </div>
            <div>
                <Button title="Sign Up">Sign Up</Button>
                <p>By clicking "Sign up" you agree to our <span>Terms & Privacy Policy</span></p>
                <Button>Already have an account? <a href="http://">Log in</a></Button>
            </div>
        </form>
    );
}

export default Signup;