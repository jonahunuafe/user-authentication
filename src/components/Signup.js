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
                <labe htmlFor="password">Password</labe>
                <input type="password" id="password" required />
            </div>
        </form>
    );
}

export default Signup;