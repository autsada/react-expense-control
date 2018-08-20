import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest //spread out the rest properties
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props}/>
            </div>  
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //if login state.auth.uid = string / if logout state.auth.uid = undefined -> byput !! infront login -> true, logout -> false
});

export default connect(mapStateToProps)(PrivateRoute);