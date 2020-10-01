import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('heroesPath', rest.location.pathname)

    return (
        <Route
            component={props => (
                (isAuthenticated)
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            )}
            {...rest}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}
