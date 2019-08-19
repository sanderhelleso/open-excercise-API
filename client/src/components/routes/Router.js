import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SocketTest from '../socket-test/SocketTest';
import { connect } from 'react-redux';
import Dashboard from '../dashboard/Dashboard';
import Docs from '../docs/Docs';
import Payment from '../payment/Payment';
import Account from '../account/Account';
import ProcessPayment from '../proccessPayment/ProcessPayment';
import VerifyAccount from '../verifyAccount/VerifyAccount';
import Landing from '../landing/Landing';
import Navbar from '../navbar/Navbar';
import Auth from '../auth/Auth';
import ResetPassword from '../resetPassword/ResetPassword';

const Router = ({ isAuthenticated, proccesingPayment }) => {
	const renderRoutes = () => {
		if (proccesingPayment) {
			return <Route path="/*" component={ProcessPayment} />;
		}

		return (
			<Fragment>
				<Route exact path={[ '/', '/documentation', '/plans', '/account' ]} component={Navbar} />
				<Route
					exact
					path={[ '/login', '/register' ]}
					component={isAuthenticated ? () => <Redirect to="/" /> : Auth}
				/>
				<Switch>
					<Route exact path="/" component={!isAuthenticated ? Landing : Dashboard} />
					<Route exact path="/verify-account" component={VerifyAccount} />
					<Route exact path="/reset-password" component={ResetPassword} />
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
