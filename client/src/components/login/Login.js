import React, { useReducer } from "react";
import _fetch from "../../lib/_fetch";
import login from "../../lib/login";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Background from "../../img/Background.jpg";
import { User, Mail } from "react-feather";
import Button from "../common/Button"

const inputs = [
    {
        placeholder: "Enter your email",
        type: "email",
        required: true,
        icon: <User color="#139ff2" />
    },
    {
        placeholder: "Enter your password",
        type: "password",
        required: true,
        icon: <Mail color="#139ff2" />
    }
];

const Login = ({ history }) => {
    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            email: "",
            password: ""
        }
    );

    const renderInputs = () => {
        return inputs.map(input => (
            <InputContainer key={input.type}>
                {input.icon}
                <StyledInput
                    placeholder={input.placeholder}
                    type={input.type}
                    required={input.required}
                    value={state[input.type]}
                    onChange={e =>
                        updateState({ [input.type]: e.target.value })
                    }
                />
            </InputContainer>
        ));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        login(false, state);
    };

    return (
        <StyledBg>
            <StyledForm noValidate>
                <StyledHeader>Login</StyledHeader>
                {renderInputs()}
       
                    <Button text="Login" onClick={handleSubmit} primary />
                    <StyledSpan onClick={() => history.push("/register")}>
                        Register now!
                    </StyledSpan>
              
            </StyledForm>
        </StyledBg>
    );
};

export default withRouter(Login);

const StyledBg = styled.div`
    min-width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background: url(${Background}) no-repeat center center fixed;
    background-size: cover;
`;

const StyledForm = styled.form`
    margin: 0 auto;
    text-align: center;
    width: 30%;
    max-width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f1f1f1;
    border-radius: 5px;
    padding: 2rem;
    @media screen and (max-width: 1000px) {
        max-width: 70%;
        width: 70%;
    }
`;

const StyledHeader = styled.h1`
    font-size: 1.5rem;
    margin: 0.5rem 0;
    display: inline-block;
`;

const InputContainer = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-items: center;

    .alert {
        border: 1px solid red;
    }
    .valid {
        border: 1px solid green;
    }
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
        border: 0.2px solid #139ff2;
    }
    ::placeholder {
        color: #00000066;
    }
`;

const StyledSpan = styled.span`
    display: flex;
    justify-content: center;
    font-size: 0.75rem;
    transition: 0.3s all ease-in-out;

    :hover {
        cursor: pointer;
        color: #0e84c9;
    }
`;
