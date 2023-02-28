import React from "react";
import './Login.scss';
import Logo from '../../assets/login-logo.png'
import LoginForm from "./component/LoginForm";

const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-warp">
                <img className="login-image" src={Logo} alt=""/>
                <LoginForm/>
            </div>
        </div>

    )
}
export default Login;
