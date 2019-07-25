import React, { useReducer } from "react";
import { connect } from "react-redux";
import loginAction from "../../actions/loginAction";
import styled from "styled-components";
import _fetch from '../../lib/_fetch';


const inputs = [
	{
		placeholder: 'Enter your email',
		type: 'email',
		required: true
	},
	{
		placeholder: 'Enter your password',
		type: 'password',
		required: true
	}
];

const Login = ({ loginAction }) => {
	const [ state, updateState ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		email: '',
		password: ''
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await _fetch('http://localhost:4000/auth/login', 'POST', null, state);
			const data = await response.json();

			loginAction(data);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className="Wrapper">
			<h1 style={{ textAlign: 'center' }}>Login</h1>


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

const actions = { loginAction };

export default connect(null, actions)(Login);
