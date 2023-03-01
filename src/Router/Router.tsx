import {Navigate, useRoutes} from "react-router-dom";
import Home from "../Pages/Home";
import User from "../Pages/User";
import React from "react";
import Layout from "../Components/Layout/Layout";
import Login from "../Pages/Login/Login";

export const ROUTER_ITEM: Array<Object> = [
    {path: "/", key: "/", label: "首页", element: <Navigate to="/login"/>},
    {
        path: "/login",
        key: "login",
        label: "登录",
        element: <Login/>
    },
    {
        path: "/layout",
        key: "layout",
        label: "控制台",
        element: <Layout/>,
        children: [
            {
                path: "home", key: "home", label: "首页", element: <Home/>,
                children: [
                    {path: "home1", key: "home1", label: "首页1", element: <Home/>},
                    {path: "user1", key: "user1", label: "用户1", element: <User/>},
                ],
            },
            {path: "user", key: "user", label: "用户", element: <User/>},
        ],
    },
];
export const GetRouters = () => {
    return useRoutes(ROUTER_ITEM);
};
