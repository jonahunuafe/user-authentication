import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

function PasswordReset() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/login");
    }

    return (
        <div className="authContainer">
            <form>
                <h2 className="reset-h2">Send password reset link</h2>
                <h4 className="reset-h4">We'll send a reset link to your email</h4>
                <Input label="Email" id="email" type="email" />
                <Button btnText="Send" className="button" />
                <Button onClick={navigateHandler} className="backToLogin">Back to Login</Button>
            </form>
        </div> 
    );
}

export default PasswordReset;