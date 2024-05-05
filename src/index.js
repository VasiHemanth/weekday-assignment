import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

// components
import App from "./App";
import Home from "./components/Home";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './Store'
import { Provider } from 'react-redux'


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
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);


