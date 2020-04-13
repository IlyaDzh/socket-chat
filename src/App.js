import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import { Auth, Home } from "pages";
import "styles/index.scss";

const App = ({ isAuth }) => (
    <div className="wrapper">
        <Switch>
            <Route exact path={["/signup", "/signin"]} component={Auth} />
            <Route
                exact
                path={["/", "/home"]}
                render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
            />
            <Route render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)} />
        </Switch>
    </div>
);

export default connect(({ users }) => ({ isAuth: users.isAuth }))(App);
