import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest //spread out the rest properties
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props}/>
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //if login state.auth.uid = string / if logout state.auth.uid = undefined -> byput !! infront login -> true, logout -> false
});

export default connect(mapStateToProps)(PublicRoute);