import Button from "./Button";

function PasswordReset() {
    return (
        <div>
            <form>
                <h2>Send password reset link</h2>
                <h4>We'll send a reset link to youe email</h4>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
                <p>
                    <Button>Send</Button>
                </p>
            </form>
        </div>
    );
}

export default PasswordReset;