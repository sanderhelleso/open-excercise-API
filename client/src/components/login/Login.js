import React, { useReducer } from "react";
import { connect } from "react-redux";
import loginAction from "../../actions/loginAction";
import styled from "styled-components";

const Login = ({ loginAction }) => {
    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { email: "", password: "" }
    );

    const inputs = [
        {
            placeholder: "Enter your email",
            type: "email",
            required: true
        },
        {
            placeholder: "Enter your password",
            type: "password",
            required: true
        }
    ];

    const handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = state;
        const loginData = { email, password };
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        };

        const response = await fetch(
            "http://localhost:4000/auth/login",
            options
        );
        if (!response.ok) throw Error(response.message);

        try {
            const data = await response.json();
            loginAction(data);
        } catch (error) {
            throw error;
        }
    };

    return (
        <div className="Wrapper">
            <h1 style={{ textAlign: "center" }}>Login</h1>

            {inputs.map(input => (
                <div key={input.type}>
                    <input
                        placeholder={input.placeholder}
                        type={input.type}
                        required={input.required}
                        value={state[input.type]}
                        onChange={e =>
                            updateState({ [input.type]: e.target.value })
                        }
                    />
                </div>
            ))}
            <div style={{ textAlign: "center" }}>
                <button type="primary" onClick={handleSubmit}>
                    Log in
                </button>

                <a style={{ paddingLeft: "1rem" }} href="/register">
                    Register now!
                </a>
            </div>
        </div>
    );
};

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { loginAction }
)(Login);
