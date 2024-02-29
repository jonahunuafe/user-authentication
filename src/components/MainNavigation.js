import Logo from "../images/istockphoto-1200899039-612x612.jpg"

function MainNavigation({ title, children }) {
    return (
        <header>
            <div>
                <img src={Logo} alt="logo" />
                <h2>Threadlist</h2>
            </div>
            <p>{title} {children}</p>
        </header>
    );
}

export default MainNavigation;