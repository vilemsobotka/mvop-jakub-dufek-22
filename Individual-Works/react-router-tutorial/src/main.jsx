import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [{
      path: "contacts/:contactId",
      element: <Contact />,
    },]
  },
]);

//const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>  <p>Hello world!</p><Link to="/">home</Link><Link to="about">about</Link>
//       <Outlet /> </div>,

//     children: [{
//       path: "about",
//       element: <h1>About</h1>,
//     },
//     ]
//   },

// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
