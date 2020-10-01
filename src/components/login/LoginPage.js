import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginPage = ({ history }) => {
    const { dispatch } = useContext(AuthContext);

    const lastPath = localStorage.getItem('heroesPath') || '/'

    const handleLogin = () => {
        //history.push('/');
        //history.replace('/');
        dispatch({
            type: types.LOGIN,
            payload: {
                name: 'Nestor'
            }
        });

        history.replace(lastPath);
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
                </button>
        </div>
    )
}
