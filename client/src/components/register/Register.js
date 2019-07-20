import React, { useState } from "react";
import { Input, Form } from "antd";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirm, setPassword_confirm] = useState("");
    return (
        <div className="Wrapper">
            <h1 style={{ textAlign: "center" }}>
                Register for Open Excercise API
            </h1>
            <Form>
                <Form.Item label="Enter Full Name">
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Enter Email">
                    <Input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Enter Password">
                    <Input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Confirm Password">
                    <Input
                        value={password_confirm}
                        onChange={e => setPassword_confirm(e.target.value)}
                    />
                </Form.Item>
            </Form>
        </div>
    );
}
