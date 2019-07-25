import React, { useReducer, Fragment } from "react";
import { connect } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import useFetch from "../../hooks/useFetch";
import registerAction from "../../actions/registerAction";
import PropTypes from "prop-types";

import register from "../../img/register.jpg";
import { User, Mail, Lock, Unlock, Target } from "react-feather";

const inputs = [
    {
        label: "Full Name",
        type: "text",
        name: "name",
        placeholder: "Enter your full name",
        icon: <User color="#139ff2" />
    },
    {
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "Enter your email",
        icon: <Mail color="#139ff2" />
    },
    {
        label: "Password",
        type: "password",
        name: "password",
        placeholder: "Enter a password",
        icon: <Unlock color="#139ff2" />
    },
    {
        label: "Confirm Password",
        type: "password",
        name: "password_confirm",
        placeholder: "Confirm Password",
        icon: <Lock color="#139ff2" />
    }
];

const Register = ({ registerAction }) => {
    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { name: "", email: "", password: "", purpose: "" }
    );

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
            registerAction(data);
        } catch (error) {
            throw error;
        }
    };

    return (
        <Fragment>
            <GlobalStyle />
            <Wrapper>
                <StyledHeader>Register</StyledHeader>
                <RegisterContainer>
                    {inputs.map(input => (
                        <InputContainer key={input.label}>
                            {/* <StyledLabel>{input.label}</StyledLabel> */}
                            {input.icon}
                            <StyledInput
                                type={input.type}
                                value={state[input.name]}
                                onChange={e =>
                                    updateState({
                                        [input.name]: e.target.value
                                    })
                                }
                                placeholder={input.placeholder}
                            />
                        </InputContainer>
                    ))}
                    {/* <StyledLabel>Purpose</StyledLabel> */}
                    <SelectBox>
                        <Target color="#139ff2" />
                        <StyledSelect
                            onChange={value => updateState({ purpose: value })}
                        >
                            {purposes.map(purpose => (
                                <option key={purpose} value={purpose}>
                                    {purpose}
                                </option>
                            ))}
                        </StyledSelect>
                    </SelectBox>

                    <StyledBtn onClick={handleSubmit}>Register</StyledBtn>
                </RegisterContainer>
            </Wrapper>
        </Fragment>
    );
};

Register.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { registerAction }
)(Register);

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        color: #000;
        font-family: 'Montserrat', sans-serif;
        overflow: hidden;
        background: url(${register}) no-repeat center center fixed ;
        background-size: cover;
    }
`;

const Wrapper = styled.div`
    margin: 0 auto;
    text-align: center;
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f1f1f1;
    border-radius: 5px;
`;

const StyledHeader = styled.h1`
    font-size: 1.5rem;
    margin: 1.5rem 0;
    display: inline-block;
`;

const InputContainer = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-items: center;
`;

const RegisterContainer = styled.div`
    margin: 0 2rem;
    text-align: left;
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.1rem;
    font-size: 1rem;
`;

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 0.75rem 0.1rem;
    margin-left: 0.5rem;
    border: none;
    background: none;
    border-bottom: 0.5px solid #139ff2;
    :focus {
        border: 0.5px solid #139ff2;
    }
    ::placeholder {
        color: #00000066;
    }
`;

const SelectBox = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    margin-bottom: 1.5rem;
`;

const StyledSelect = styled.select`
    width: 100%;
    padding: 0.75rem 0.1rem;
    margin-left: 0.5rem;
    border: none;
    background: none;
    border-bottom: 0.5px solid #139ff2;
    :hover {
        cursor: pointer;
    }
`;

const StyledBtn = styled.button`
    width: 100%;
    border: none;
    color: #fff;
    background: #139ff2;
    padding: 0.75rem;
    margin-bottom: 1.5rem;
    transition: 0.3s all ease-in-out;
    :hover {
        background: #0e84c9;
        cursor: pointer;
    }
`;
