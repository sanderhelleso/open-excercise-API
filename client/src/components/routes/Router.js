import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Register from '../register/Register';
import SideMenu from '../sidemenu/SideMenu';
import SocketTest from '../socket-test/SocketTest';
import Login from '../login/Login';
import { connect } from 'react-redux';
import Dashboard from '../dashboard/Dashboard';
import Docs from '../docs/Docs';

const Router = ({ isAuthenticated }) => {
	return (
		<BrowserRouter>
			<Route path="/*" component={SideMenu} />
			<Switch>
				<Route exact path="/" component={isAuthenticated ? Dashboard : Login} />

				<Route exact path="/login" component={isAuthenticated ? () => <Redirect to="/" /> : Login} />
				<Route exact path="/socket-test" component={SocketTest} />

				<Route exact path="/register" component={isAuthenticated ? () => <Redirect to="/" /> : Register} />

				<Route exact path="/documentation" component={Docs} />
			</Switch>
		</BrowserRouter>
	);
};

const mapStateToProps = ({ auth }) => {
	const { isAuthenticated } = auth;
	return { isAuthenticated };
};

export default connect(mapStateToProps, null)(Router);
