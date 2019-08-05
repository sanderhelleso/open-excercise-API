import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

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
            <StyledMainContainer>
                <StyledContainer>
                    <StyledP>
                        Open Excercise <StyledSpan>API</StyledSpan>
                    </StyledP>
                    <StyledUl>{renderOptions()}</StyledUl>
                </StyledContainer>
            </StyledMainContainer>
        </StyledNav>
    );
};

export default withRouter(Navbar);

const StyledNav = styled.nav`
    position: fixed;
    animation: 0.4s ease forwards;
    width: 100vw;
    z-index: 1;
`;

const StyledMainContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: 100%;
    background: rgb(230, 230, 230);
    background: linear-gradient(
        180deg,
        rgba(230, 230, 230, 0.95) 15%,
        rgba(237, 237, 237, 0.9) 77%
    );
    -webkit-box-shadow: 0px 1px 2px #ededed;
    -moz-box-shadow: 0px 1px 4px #ededed;
    box-shadow: 0px 1px 4px #ededed;
    overflow-y: auto;
    /* @media screen and (max-width: 568px) {
        flex-direction: column;
        text-align: center;
        ul {
            justify-content: space-between;
        }
    } */
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    max-width: 1000px;
`;

const StyledP = styled.p`
    padding: 0.5rem 0.5rem 0.5rem 0;
    color: #000;
`;
const StyledSpan = styled.span`
    color: #139ff2;
    font-weight: 600;
`;

const StyledUl = styled.ul`
    font-family: "Open Sans", "sans-serif";
    font-size: 0.8rem;
    list-style: none;
    display: flex;
    margin: 0;
    .active {
        background: #e3e3e3;
        color: #139ff2;
        font-weight: 600;
        ::after {
            transform: scaleX(1);
        }
    }
`;

const StyledLi = styled.li`
    margin: 0;
    padding: 0.5rem 2rem;
    transition: 0.1s ease-in-out;
    position: relative;
    /* :hover  {
        cursor: pointer;
        background: #f2f2f2;
        border-bottom: 4px solid #139ff2;
    } */
    :hover {
        cursor: pointer;
    }
    ::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #139ff2;
        position: absolute;
        left: 0;
        bottom: 0;
        transform: scaleX(0);
        transition: transform 0.5s;
    }
    :hover::after {
        transform: scaleX(1);
    }
`;
