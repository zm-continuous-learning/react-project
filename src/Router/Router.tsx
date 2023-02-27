import { Navigate, useRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import User from "../Pages/User";
import React from "react";
import Layout from "../Components/Layout/Layout";

export const ROUTER_ITEM: Array<Object> = [
  { path: "/", label: "首页", element: <Navigate to="/layout/home" /> },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      { path: "home", element: <Home />, index: true },
      { path: "user", element: <User /> },
    ],
  },
];
export const GetRouters = () => {
  return useRoutes(ROUTER_ITEM);
};
