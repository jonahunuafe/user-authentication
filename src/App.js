import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './routes/Root';
import ErrorPage from './pages/ErrorPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from "./components/Home";
import PasswordReset from './pages/PasswordReset';
import NoLoginCredentials from "./components/NoLoginCredentials";
import { GlobalProvider } from "./context/GlobalState";
import { AuthProvider } from "./firebaseContext/authContext";

const router = createBrowserRouter([
  {path: "/", element: <RootLayout />, errorElement: <ErrorPage />, children: [
    {index: true, element: <Signup/>},
    {path: "/login", element: <Login />},
  ]},
  {path: "/login/passwordreset", element: <PasswordReset />},
  {path: "/home", element: <Home />},
  {path: "/loginerror", element: <NoLoginCredentials />}
]);

function App() {
  return (
    <>
      <GlobalProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </GlobalProvider>
    </>
  );
}

export default App;
