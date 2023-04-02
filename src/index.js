// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/home.js";
import Blog from "./pages/blog/blog.js";
import MessageBoard from "./pages/MessageBoard/MessageBoard.js";
import Resume from "./pages/resume/Resume.js";
import Assignment3 from "./pages/blog/assignment3/Assignmnet3.js";
import Perlin from "./pages/blog/perlinNoise/Perlin.js";
import StaticWebAppTutorial from "./pages/blog/Azurewebapp/staticWebAppTutorial.js";
import Internship from "./pages/blog/Internship/Internship.js";
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
  {
    path: "/perlin",
    element: <Perlin />,
  }, 
  {
    path: "/assignment3",
    element: <Assignment3 />,
  }, 
  {
    path: "/staticWebAppTutorial",
    element: <StaticWebAppTutorial />,
  }, 
  {
    path: "/internship",
    element: <Internship />,
  }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
