import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "../register/Register";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact to="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}
