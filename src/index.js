// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/home.js";
import Blog from "./pages/blog/blog.js";
import MessageBoard from "./pages/MessageBoard/MessageBoard.js";
import Resume from "./pages/resume/Resume.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/resume",
    element: <Resume />,
  }, 
  {
    path: "/message",
    element: <MessageBoard />,
  }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
