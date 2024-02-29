import { Outlet, Link } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";


function RootLayout() {
    return (
        <>
            <MainNavigation />
            <nav>
                <ul>
                <li>
                    <Link to="/signup">Sign up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default RootLayout;


  