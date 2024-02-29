import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <RootLayout />, errorElement: <ErrorPage />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
