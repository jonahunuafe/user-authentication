import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
// import { GlobalContext } from "../context/GlobalState";
// import { useContext } from "react";

function RootLayout() {
    // const {  } = useContext(GlobalContext);

    return (
        <>
            <MainNavigation />
            <Outlet>
                <Signup />
                <Login />
            </Outlet>
        </>
    );
}

export default RootLayout;


  