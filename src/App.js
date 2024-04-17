import React, { useState } from "react"

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import RootLayout from './routes/Root';
// import ErrorPage from './pages/ErrorPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import PasswordReset from './pages/PasswordReset';

// const router = createBrowserRouter([
//   {path: "/", element: <Signup/>},
//   {path: "/login", element: <Login />},
//   {path: "/login/passwordreset", element: <PasswordReset />}
// ]);

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  return (
    <>
      {/* <RouterProvider router={router} /> */}

      <div className="App">
        {
          currentForm === "login" ?   <Login /> : <Signup />
        }
      </div>
    </>
  );
}

export default App;
