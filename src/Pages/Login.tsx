import React from "react";
import {Outlet} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div>
                登录
            </div>
            <Outlet/>
        </div>
    )
}
export default Login;
