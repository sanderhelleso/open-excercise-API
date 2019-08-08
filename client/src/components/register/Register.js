import React, { useReducer } from "react";
import login from "../../lib/login";
import Background from "../../img/Background.jpg";
import { Target, User, Mail, Lock, Unlock } from "react-feather";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";

const inputs = [
    {
        type: "text",
        name: "name",
        placeholder: "Enter your full name",
        icon: <User color="#139ff2" />
    },
    {
        type: "email",
        name: "email",
        placeholder: "Enter your email",
        icon: <Mail color="#139ff2" />
    },
    {
        type: "password",
        name: "password",
        placeholder: "Enter a password",
        icon: <Unlock color="#139ff2" />
    },
    {
        type: "password",
        name: "password_confirm",
        placeholder: "Confirm Password",
        icon: <Lock color="#139ff2" />
    }
];

const purposes = ["Web Design", "Personal Use", "Mobile App"];

const Register = ({ history }) => {
    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: "",
            email: "",
            password: "",
            purpose: ""
        }
    );

    const renderInputs = () => {
        return inputs.map(input => (
            <Input
                key={input.name}
                icon={input.icon}
                type={input.type}
                value={state[input.name]}
                onChange={e => updateState({ [input.name]: e.target.value })}
                placeholder={input.placeholder}
            />
        ));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        login(true, state);
    };

    return (
        <StyledBg>
            <Wrapper>
                <StyledHeader>Register</StyledHeader>
                <RegisterContainer>
                    {renderInputs()}
                    <SelectBox>
                        <Target color="#139ff2" />
                        <StyledSelect
                            onChange={({ target: { value } }) =>
                                updateState({ purpose: value })
                            }
                            required
                        >
                            {purposes.map(purpose => (
                                <option key={purpose} value={purpose}>
                                    {purpose}
                                </option>
                            ))}
                        </StyledSelect>
                    </SelectBox>
                    <Button onClick={handleSubmit} text="Register" primary />

                    <StyledSpan onClick={() => history.push("/")}>
                        Click here to login instead!
                    </StyledSpan>
                </RegisterContainer>
            </Wrapper>
        </StyledBg>
    );
};

export default withRouter(Register);

const StyledBg = styled.div`
    min-width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background: url(${Background}) no-repeat center center fixed;
    background-size: cover;
`;

const Wrapper = styled.form`
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
    @media screen and (max-width: 1000px) {
        max-width: 70%;
        width: 70%;
    }
`;

const StyledHeader = styled.h1`
    font-size: 1.5rem;
    margin: 1.5rem 0;
    display: inline-block;
`;

const RegisterContainer = styled.div`
    margin: 0 2rem;
    text-align: left;
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

const StyledSpan = styled.span`
    display: flex;
    justify-content: center;
    font-size: 0.75rem;
    margin-bottom: 1rem;
    :hover {
        cursor: pointer;
        color: #0e84c9;
    }
`;
