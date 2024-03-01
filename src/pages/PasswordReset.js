import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Input from "../components/Input";

function PasswordReset() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/login");
    }

    return (
        <div>
            <form>
                <h2>Send password reset link</h2>
                <h4>We'll send a reset link to youe email</h4>
                <Input label="Email" id="email" />
                <p>
                    <Button>Send</Button>
                </p>
                <p>
                    <button onClick={navigateHandler}>Back to Login</button>
                </p>
            </form>
        </div> 
    );
}

export default PasswordReset;