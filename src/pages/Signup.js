import { Link } from "react-router-dom";

import Input from "../components/Input";
import MainNavigation from "../components/MainNavigation";

function Signup() {

    function handleSubmit(event) {
        event.preventDefault();

    }

    return (
        <>
            <MainNavigation />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="signup-h2">Create an account</h2>
                        <Input label="First Name" id="first-name" type="text" />
                        <Input label="Last Name" id="last-name" type="text" />
                        <Input label="Email" id="email" type="email" />
                        <Input label="Password" id="password" type="password" />
                        <button className="signUpBtn">Sign Up</button>
                    </div> 
                </form>

                <div>
                    <p>By clicking "Sign up" you agree to our <a href="http://">Terms & Privacy Policy</a></p>
                    <p className="signUpLogin">
                        Already have an account? <Link to="/login">Log in</Link>
                    </p> 
                </div>
            </div>
        </>
    );
}

export default Signup;