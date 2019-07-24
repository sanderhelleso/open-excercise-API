import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Register from "../register/Register";
import SocketTest from "../socket-test/SocketTest";
import { connect } from "react-redux";

const Router = ({ isAuthenticated }) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/socket-test" component={SocketTest} />
                <Route
                    exact
                    path="/register"
                    component={
                        isAuthenticated
                            ? () => <Redirect to="/socket-test" />
                            : Register
                    }
                />
            </Switch>
        </BrowserRouter>
    );
};

const mapStateToProps = ({ auth }) => {
    const { isAuthenticated } = auth;
    return { isAuthenticated };
};

export default connect(
    mapStateToProps,
    null
)(Router);
