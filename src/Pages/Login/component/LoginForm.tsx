import React from "react";
import './LoginForm.scss';
import {Button, Checkbox, Form, Input, Modal} from "antd";
import {LockOutlined, UserOutlined} from '@ant-design/icons';

const LoginForm = () => {
    const onFinish = (values: {username:string,password:string}) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        Modal.error({
            title: '提示',
            content: '请正确填写登录信息',
        });
    };

    return (
        <Form
            name="basic"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                name="username"
                rules={[
                    {required: true, message: '请输入密码'},
                    {max: 20, message: '最多20个字符'},
                    {min: 5, message: '最少5个字符'},
                    {
                        pattern: new RegExp('^[A-Za-z0-9]+$', 'g'),
                        message: '用户名仅支持数字、字母',
                    },
                    ()=>({
                        validator(_,value){
                            if (value === 'admin'){
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('不通过'));
                        }
                    })
                ]}
            >
                <Input placeholder="请输入用户名" prefix={<UserOutlined/>}/>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    { required: true, message: '请输入您的密码!' },
                    { max: 20, message: '最多20个字符' },
                    { min: 6, message: '最少6个字符' },
                    ()=>({
                        validator(_,value){
                            if (value === 'password'){
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('不通过'));
                        }
                    })
                ]}
            >
                <Input.Password placeholder="请输入密码" prefix={<LockOutlined/>}/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Submit
                </Button>
                <span className="register-line">
						还没有账号，
						<a href="/registerpage" className="register-link">
							注册一个账户
						</a>
					</span>
            </Form.Item>
        </Form>
    )
}
export default LoginForm;
