import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import {register} from "../services/authService";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    let message = null;
    const onRegister = (credentials) => {
        register(credentials)
            .then((response) => {
                console.log(response.data);
                message = response.data.msg;
                //dispatch({type: 'isLoggedIn', payload: {isLoggedIn: true}});
                navigate('/login');
            })
            .catch((error) => {
                console.log(error);
                message = error.response.data.msg;
            })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister({ username, password, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
                required
            />
            <TextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                required
            />
            <TextField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                required
            />
            <Button variant="contained" color="primary" type="submit">
                Register
            </Button>
            <p>{message}</p>
        </form>
    );
};

export default RegisterForm;
