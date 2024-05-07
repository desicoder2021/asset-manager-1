import React from "react";
import { Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";

const routes = [
  {
    path: "/",
    element: <h2>Home</h2>,
  },
  {
    path: "/about",
    element: <Navigate to={"/about"} />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
