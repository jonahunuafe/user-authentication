import { useNavigate } from "react-router-dom";

import Input from "../components/Input";

function PasswordReset() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/login");
    }

    return (
        <div className="container">
            <form>
                <h2>Send password reset link</h2>
                <h4>We'll send a reset link to youe email</h4>
                <Input label="Email" id="email" type="email" />
                <p>
                    <button>Send</button>
                </p>
                <p>
                    <button onClick={navigateHandler}>Back to Login</button>
                </p>
            </form>
        </div> 
    );
}

export default PasswordReset;