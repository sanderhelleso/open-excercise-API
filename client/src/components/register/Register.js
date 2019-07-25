import React, { useReducer } from 'react';
import { Input, Form, Button, Select } from 'antd';
import _fetch from '../../lib/_fetch';
import login from '../../lib/login';

const { Option } = Select;

const inputs = [
	{
		label: 'Full Name',
		type: 'text',
		name: 'name',
		required: true
	},
	{
		label: 'Email',
		type: 'email',
		name: 'email',
		required: true
	},
	{
		label: 'Password',
		type: 'password',
		name: 'password',
		required: true
	},
	{
		label: 'Confirm Password',
		type: 'password',
		name: 'password_confirm'
	}
];

const purposes = [ 'Web Design', 'Personal Use', 'Mobile App' ];

const Register = () => {
	const [ state, updateState ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		name: '',
		email: '',
		password: '',
		purpose: ''
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		login(true, state);
	};

	 return (
        <Fragment>
            <GlobalStyle />
            <Wrapper>
                <StyledHeader>Register</StyledHeader>
                <RegisterContainer>
                    {inputs.map(input => (
                        <InputContainer key={input.label}>
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

export default Register;

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
