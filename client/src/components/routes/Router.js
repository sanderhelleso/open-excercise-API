import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Register from '../register/Register';
import SideMenu from '../sidemenu/SideMenu';
import SocketTest from '../socket-test/SocketTest';
import Login from '../login/Login';
import { connect } from 'react-redux';
import Dashboard from '../dashboard/Dashboard';
import Docs from '../docs/Docs';
import Payment from '../payment/Payment';
import Account from '../account/Account';
import ProcessPayment from '../proccessPayment/ProcessPayment';
import VerifyAccount from '../verifyAccount/VerifyAccount';
import Landing from '../landing/Landing';
import Navbar from '../navbar/Navbar';

const Router = ({ isAuthenticated, proccesingPayment }) => {
	const renderRoutes = () => {
		if (proccesingPayment) {
			return <Route path="/*" component={ProcessPayment} />;
		}

		return (
			<Fragment>
				<Route path="/*" component={Navbar} />
				<Switch>
					<Route exact path="/" component={!isAuthenticated ? Landing : Dashboard} />
					<Route exact path="/login" component={isAuthenticated ? () => <Redirect to="/" /> : Login} />
					<Route exact path="/register" component={isAuthenticated ? () => <Redirect to="/" /> : Register} />
					<Route exact path="/verify-account" component={VerifyAccount} />

					<Route exact path="/socket-test" component={SocketTest} />
					<Route exact path="/documentation" component={Docs} />
					<Route exact path="/account" component={Account} />
					<Route exact path="/plans" component={Payment} />
				</Switch>
			</Fragment>
		);
	};

	return <BrowserRouter>{renderRoutes()}</BrowserRouter>;
};

const mapStateToProps = ({ auth, proccessPayment }) => {
	const { isAuthenticated } = auth;
	const { proccesingPayment } = proccessPayment;
	return { isAuthenticated, proccesingPayment };
};

export default connect(mapStateToProps, null)(Router);
