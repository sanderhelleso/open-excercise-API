import React, { Fragment } from "react";
import { connect } from "react-redux";
import authReducer from "../../reducers/authReducer";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { LogOut, BookOpen } from "react-feather";

const SideMenu = ({ history, isAuthenticated, name }) => {
    const location = history.location;
    console.log(location);

    return (
        <Wrapper className="column">
            {isAuthenticated ? (
                <Content>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                    <h3>Welcome {name}</h3>
                </Content>
            ) : null}
        </Wrapper>
    );
};

const mapStateToProps = ({ auth: { isAuthenticated, name } }) => ({
    isAuthenticated,
    name
});

export default withRouter(
    connect(
        mapStateToProps,
        { authReducer }
    )(SideMenu)
);

const Wrapper = styled.div`
    flex-shrink: 0;
    background-color: #000;
    color: #fff;
    max-width: 200px;
    min-width: 200px;
`;

const Content = styled.div`
    flex-grow: 1;
    padding: 1rem;
`;
