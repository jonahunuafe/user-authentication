

function MainNavigation({ title, children }) {
    return (
        <header>
            <div>
                <img src="https://www.istockphoto.com/photo/one-like-social-media-notification-with-thumb-up-icon-gm1200899039-344150884" alt="logo" />
                <h2>Threadlist</h2>
            </div>
            <p>{title} {children}</p>
        </header>
    );
}

export default MainNavigation;