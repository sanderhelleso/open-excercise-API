import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Register from "../register/Register";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path to="/register" component={Register} />
                <Redirect from="/" to="/register" />
            </Switch>
        </BrowserRouter>
    );
}
