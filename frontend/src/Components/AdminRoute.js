import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './helpers/auth';

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            isAuthenticated() && isAuthenticated().role === 1 ? (
                <Component {...props} />
            ) : (
                <Navigate to={{
                    pathname: '/signin',
                    state: { from: props.location }
                }}
            />
            )
        }
    />
);


export default AdminRoute;