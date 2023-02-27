import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import User from "../Pages/User";
import React from "react";
import Layout from "../Components/Layout/Layout";

export const ROUTER_ITEM: Array<Object> = [
 // { path: "/", key:"/",label: "首页", element: <Navigate to="/layout/home" /> },
  {
    path: "/layout",
    key:"layout",
    label:"控制台",
    element: <Layout />,
    children: [
      { path: "home",key:"home", label:"首页", element: <Home />, index: true },
      { path: "user",key:"user", label:"用户",element: <User /> },
    ],
  },
];
export const GetRouters = () => {
  return useRoutes(ROUTER_ITEM);
};
