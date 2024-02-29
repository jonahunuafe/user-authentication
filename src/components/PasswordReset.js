import Button from "./Button";
import Input from "./Input";

function PasswordReset() {
    return (
        <div>
            <form>
                <h2>Send password reset link</h2>
                <h4>We'll send a reset link to youe email</h4>
                <Input label="Email" id="email" />
                <p>
                    <Button>Send</Button>
                </p>
            </form>
        </div> 
    );
}

export default PasswordReset;