import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Register from "../register/Register";
import SocketTest from "../socket-test/SocketTest";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/socket-test" component={SocketTest} />
                <Route exact path="/register" component={Register} />
                <Redirect from="/" to="/register" />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
