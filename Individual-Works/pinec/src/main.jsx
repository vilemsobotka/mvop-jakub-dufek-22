import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Stuff from "./Stuff"
import Home from './Home'
import Clubs from './Clubs'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Stuff",
        element: <Stuff />
      },
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/Clubs",
        element: <Clubs />
      },

    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
