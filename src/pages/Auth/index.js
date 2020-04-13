import React from "react";
import { Route } from "react-router-dom";

import { LoginForm, RegisterForm } from "containers";
import "./Auth.scss";

const Auth = () => (
    <section className="auth">
        <div className="auth-content">
            <Route exact path="/signup" component={RegisterForm} />
            <Route exact path="/signin" component={LoginForm} />
        </div>
    </section>
);

export default Auth;
