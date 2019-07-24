import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Register from "../register/Register";
import SocketTest from "../socket-test/SocketTest";
import Login from "../login/Login";
import { connect } from "react-redux";
import Dashboard from "../dashboard/Dashboard";

const Router = ({ isAuthenticated }) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route
                    exact
                    path="/"
                    component={
                        isAuthenticated
                            ? () => <Redirect to="/dashboard" />
                            : Login
                    }
                />
                <Route
                    exact
                    path="/login"
                    component={
                        isAuthenticated
                            ? () => <Redirect to="/dashboard" />
                            : Login
                    }
                />
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
