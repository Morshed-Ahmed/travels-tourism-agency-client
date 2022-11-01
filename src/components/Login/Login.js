import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { logInWithGoogle, user } = useFirebase();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/'

    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(result => {
                history.push(redirect_url)
                /* const user = result.user; */

            })
    }
    return (
        <div>
            <h2>please log in: {user.name}</h2>
            <button onClick={handleGoogleLogin}>google sign in</button>
        </div>
    );
};

export default Login;