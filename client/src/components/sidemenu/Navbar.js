import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import Logo from "../../img/logo.png";

const options = [
    {
        name: "Documentation",
        path: "/documentation"
    },
    {
        name: "Login",
        path: "/login"
    },
    {
        name: "Register",
        path: "/register"
    }
];

const Navbar = ({ history, match }) => {
    const activePath = match.url;

    const renderOptions = () => {
        return options.map((option, i) => {
            return (
                <StyledLi
                    key={`navbar-option-${i}`}
                    className={option.path === activePath ? "active" : null}
                    onClick={() => history.push(`${option.path}`)}
                >
                    {option.name}
                </StyledLi>
            );
        });
    };
    return (
        <StyledNav>
            <StyledP>
                Open Excercise <StyledSpan>API</StyledSpan>
            </StyledP>
            <StyledUl>{renderOptions()}</StyledUl>
        </StyledNav>
    );
};

export default withRouter(Navbar);

const StyledNav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 1;
    @media screen and (max-width: 568px) {
        flex-direction: column;
        text-align: center;
        ul {
            justify-content: space-between;
        }
    }
`;

const StyledP = styled.p`
    padding: 0.5rem 1rem;
    color: #000;
`;
const StyledSpan = styled.span`
    color: #139ff2;
`;

const StyledUl = styled.ul`
    font-family: "Open Sans", "sans-serif";
    font-size: 0.75rem;
    list-style: none;
    display: flex;
    margin-right: 1rem;
    margin-top: 0;
    .active {
        background: #f2f2f2;
        border-bottom: 4px solid #139ff2;
    }
`;

const StyledLi = styled.li`
    padding: 0.5rem 1rem;
    transition: 0.1s ease-in-out;
    :hover  {
        cursor: pointer;
        background: #f2f2f2;
        border-bottom: 4px solid #139ff2;
    }
`;
