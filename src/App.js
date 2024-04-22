import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './routes/Root';
import ErrorPage from './pages/ErrorPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PasswordReset from './pages/PasswordReset';
import { GlobalProvider } from "./context/GlobalState";

const router = createBrowserRouter([
  {path: "/", element: <RootLayout />, errorElement: <ErrorPage />, children: [
    {index: true, element: <Signup/>},
    {path: "/login", element: <Login />},
  ]},
  {path: "/login/passwordreset", element: <PasswordReset />}
]);

function App() {
  return (
    <>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </>
  );
}

export default App;
