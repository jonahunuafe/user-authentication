

function MainNavigation({ title, children }) {
    return (
        <header>
            <div>
                {/* <img src={Logo} alt="react-logo" /> */}
                <h2>Threadlist</h2>
            </div>
            <p>{title} {children}</p>
        </header>
    );
}

export default MainNavigation;