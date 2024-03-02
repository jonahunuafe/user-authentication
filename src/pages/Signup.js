import { Link } from "react-router-dom";

import Button from "../components/Button";
import Input from "../components/Input";

function Signup() {
    function handleSubmit(event) {
        event.preventDefault();


    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Create an account</h2>
                <Input label="First Name" id="first-name" type="text" />
                <Input label="Last Name" id="last-name" type="text" />
                <Input label="Email" id="email" type="email" />
                <Input label="Password" id="password" type="password" />
            </div>
            <div>
                <Button type="submit">Sign Up</Button>
                <p>By clicking "Sign up" you agree to our <a href="http://">Terms & Privacy Policy</a></p>
                <Button>Already have an account? <Link to="/login">Log in</Link></Button>
            </div>
        </form>
    );
}

export default Signup;