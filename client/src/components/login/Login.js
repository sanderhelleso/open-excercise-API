import React from "react";
import { Form, Input, Button } from "antd";

const Login = () => {
    return (
        <div className="Wrapper">
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <Form className="login-form">
                <Form.Item>
                    <Input placeholder="Username" />
                </Form.Item>
                <Form.Item>
                    <Input type="password" placeholder="Password" />
                </Form.Item>
                <div style={{ textAlign: "center" }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                    <a style={{ paddingLeft: "1rem" }} href="/register">
                        Register now!
                    </a>

                    <Form.Item />
                </div>
            </Form>
        </div>
    );
};

export default Login;
