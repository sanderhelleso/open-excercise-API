import React, { Fragment } from "react";
import { connect } from "react-redux";
import logoutAction from "../../actions/logoutAction";
import authReducer from "../../reducers/authReducer";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { LogOut } from "react-feather";
import Navbar from "./Navbar";

const options = [
    {
        name: "Dashboard",
        path: "/"
    },
    {
        name: "Documentation",
        path: "/documentation"
    },
    {
        name: "Accout",
        path: "/account"
    },
    {
        name: "Contact",
        path: "/contact"
    }
];

const SideMenu = ({
    logoutAction,
    match,
    history,
    isAuthenticated,
    name,
    email
}) => {
    const activePath = match.url;

    const renderOptions = () => {
        return options.map((option, i) => {
            return (
                <StyledLi
                    key={`sidemenu-option-${i}`}
                    className={option.path === activePath ? "active" : null}
                    onClick={() => {
                        history.push(`${option.path}`);
                    }}
                >
                    {option.name}
                </StyledLi>
            );
        });
    };

    return (
        <Fragment>
            {isAuthenticated ? (
                <StyledWrapper className="column">
                    <StyledContent>
                        <StyledTextContainer>
                            <StyledName>Welcome {name}</StyledName>
                            <StyledEmail>{email}</StyledEmail>
                        </StyledTextContainer>
                        <StyledUl>{renderOptions()}</StyledUl>
                    </StyledContent>
                    <StyledButton onClick={logoutAction}>
                        Logout
                        <LogOut size="12" />
                    </StyledButton>
                </StyledWrapper>
            ) : (
                <Navbar />
            )}
        </Fragment>
    );
};

const mapStateToProps = ({
    logoutAction,
    auth: { isAuthenticated, name, email }
}) => ({
    logoutAction,
    isAuthenticated,
    name,
    email
});

export default withRouter(
    connect(
        mapStateToProps,
        { authReducer, logoutAction }
    )(SideMenu)
);

const StyledWrapper = styled.div`
    flex-shrink: 0;
    background-color: #f2f2f2;
    max-width: 200px;
    min-width: 200px;
`;

const StyledContent = styled.div`
    flex-grow: 1;
    text-align: left;
    position: relative;
`;

const StyledTextContainer = styled.div`
    padding: 1.5rem;
    border-bottom: 1px solid #cfcfcf;
`;

const StyledName = styled.p`
    color: #444444;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
`;

const StyledEmail = styled.p`
    color: #7a7a7a;
    font-size: 0.75rem;
`;

const StyledUl = styled.ul`
    position: absolute;
    list-style: none;
    text-align: left;
    top: 50%;
    left: 0;
    right: 0;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    padding: 0;

    .active {
        border-left: 4px solid #139ff2;
        color: #444444;
        background-color: #fafafa;
        font-weight: 400;
        -webkit-box-shadow: -5px 0px 10px -5px rgba(217, 217, 217, 1);
        -moz-box-shadow: -5px 0px 10px -5px rgba(217, 217, 217, 1);
        box-shadow: -5px 0px 10px -5px rgba(217, 217, 217, 1);
    }
`;

const StyledLi = styled.li`
    color: #44444480;
    font-size: 1rem;
    padding: 1rem 1.5rem;
    border-left: 4px solid #f2f2f2;
    transition: 0.2s all ease-in-out;
    :hover {
        border-left: 4px solid #139ff2;
        color: #444444;
        cursor: pointer;
        background-color: #fafafa;
        -webkit-box-shadow: -5px 0px 10px -5px rgba(217, 217, 217, 1);
        -moz-box-shadow: -5px 0px 10px -5px rgba(217, 217, 217, 1);
        box-shadow: -5px 0px 10px -5px rgba(217, 217, 217, 1);
    }
`;

const StyledButton = styled.div`
    padding: 1rem 1.5rem;
    border-top: 1px solid #cfcfcf;
    color: #44444480;
    background: none;
    transition: 0.3s all ease-in-out;
    border-left: 4px solid #f2f2f2;
    svg {
        margin-left: 0.5rem;
    }
    :hover {
        color: #444444;
        cursor: pointer;
        border-left: 4px solid #139ff2;
        -webkit-box-shadow: -5px 0px 10px -5px rgba(217, 217, 217, 1);
        -moz-box-shadow: -5px 0px 10px -5px rgba(217, 217, 217, 1);
        box-shadow: -5px 0px 10px -5px rgba(217, 217, 217, 1);
    }
`;
