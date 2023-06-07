import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Book from "./Book";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/book/:bookid",
    element: <Book />,
  },
]);
root.render(<RouterProvider router={router} />);
