import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { login } from '../services/authService';
import Dashboard from './Dashboard';
import {useAuthContext} from "../context/AuthContext";
import {Button} from "@material-ui/core";

export const LoginPage = () => {
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
     const {isAuthenticated, updateAuthn} = useAuthContext();
    //const [isAuthenticated, setIsAuthenticated] = useState(false);

    console.log(isAuthenticated);
    const onLogin = (credentials) => {
        login(credentials)
            .then((response) => {
                console.log(response.data);
                //localStorage.setItem('token', response.data.token); // Store the token in local storage
                updateAuthn(response.data.user, true, response.data.token);
                navigate('/otp');
            })
            .catch((error) => {
                console.log(error);

                const errorMsg = error.response?.data?.msg || "An unknown error occurred";
                setMessage(errorMsg);
            });
    };

    const handleLogout = () => {
        updateAuthn(null, false);
        navigate('/login');
    }

    return (
        <div>
            {
                isAuthenticated ? (<>
                    <Dashboard />
                    <Button variant="contained" color="secondary" onClick={handleLogout}>
                        Logout
                    </Button>

                    </>) : (<LoginForm onLogin={onLogin} />)
            }
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginPage;
