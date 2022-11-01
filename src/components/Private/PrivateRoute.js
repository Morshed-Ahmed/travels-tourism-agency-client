import React from 'react';
import { Spinner } from "react-bootstrap";
import {
    Route,
    Redirect,
} from "react-router-dom";
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase();

    if (isLoading) {
        return <Spinner animation="border" variant="info" />
    }

    return (
        <Route {...rest}
            render={({ location }) =>
                user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            } />
    );
};

export default PrivateRoute;