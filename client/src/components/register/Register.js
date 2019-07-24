import React, { useReducer } from "react";
import { Input, Form, Button, Select } from "antd";
import { connect } from "react-redux";
import useFetch from "../../hooks/useFetch";
import authActions from "../../actions/authActions";
import PropTypes from "prop-types";

const { Option } = Select;

const Register = ({ authActions }) => {
    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { name: "", email: "", password: "", purpose: "" }
    );

    const inputs = [
        {
            label: "Full Name",
            type: "text",
            name: "name",
            required: true
        },
        {
            label: "Email",
            type: "email",
            name: "email",
            required: true
        },
        {
            label: "Password",
            type: "password",
            name: "password",
            required: true
        },
        {
            label: "Confirm Password",
            type: "password",
            name: "password_confirm"
        }
    ];

    const purposes = ["Web Design", "Personal Use", "Mobile App"];

    const handleSubmit = async e => {
        e.preventDefault();

        const { name, email, password, purpose } = state;
        const userData = { name, email, password, purpose };
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        };

        const response = await fetch(
            "http://localhost:4000/auth/register",
            options
        );
        if (!response.ok) throw Error(response.message);

        try {
            const data = await response.json();
            console.log(data);
            authActions(data);
        } catch (error) {
            throw error;
        }
    };

    return (
        <div className="Wrapper">
            <h1 style={{ textAlign: "center" }}>
                Register for Open Excercise API
            </h1>
            <Form onSubmit={handleSubmit}>
                {inputs.map(input => (
                    <Form.Item key={input.label} label={input.label}>
                        <Input
                            required={input.required}
                            type={input.type}
                            value={state[input.name]}
                            onChange={e =>
                                updateState({ [input.name]: e.target.value })
                            }
                        />
                    </Form.Item>
                ))}
                <Form.Item label="Purpose">
                    <Select onChange={value => updateState({ purpose: value })}>
                        {purposes.map(purpose => (
                            <Option key={purpose} value={purpose}>
                                {purpose}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button
                        style={{ width: "100%" }}
                        type="primary"
                        onClick={handleSubmit}
                    >
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

Register.propTypes = {
    isAuthenticated: PropTypes.bool,
    register: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { authActions }
)(Register);
