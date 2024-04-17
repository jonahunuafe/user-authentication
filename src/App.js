import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import MainNavigation from "./components/MainNavigation";

// import RootLayout from './routes/Root';
// import ErrorPage from './pages/ErrorPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import PasswordReset from './pages/PasswordReset';

const router = createBrowserRouter([
  {path: "/", element: <Signup/>},
  {path: "/login", element: <Login />},
  // {path: "/login/passwordreset", element: <PasswordReset />}
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
