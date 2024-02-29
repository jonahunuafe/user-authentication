import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import Signup from './pages/Signup';
import Login from './components/Login';

const router = createBrowserRouter([
  {path: "/", element: <RootLayout />, errorElement: <ErrorPage />, children: [
    {path: "/signup", element: <Signup/> },
    {path: "/login", element: <Login /> }
  ]},
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
