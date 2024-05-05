import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home";
import Error from "./components/Error";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // {
      //   path: '/:job',
      //   element: <JobDetail />,
      // },
      {
        path: '/contact',
        element: <div>Contact us</div>,
      },
    ],
  },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);


