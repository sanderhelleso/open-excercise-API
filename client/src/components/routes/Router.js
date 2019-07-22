import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../register/Register';
import SocketTest from '../socket-test/SocketTest';

export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/socket-test" component={SocketTest} />
				<Route exact path="/register" component={Register} />
			</Switch>
		</BrowserRouter>
	);
}
