import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../register/Register';
import SocketTest from '../socket-test/SocketTest';
import Dashboard from '../dashboard/Dashboard';

export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/socket-test" component={SocketTest} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/dashboard" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
}
