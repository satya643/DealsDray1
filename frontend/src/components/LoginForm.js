import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import {Link} from "react-router-dom";

const LoginForm = ({onLogin}) => {

    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({username, password});
    };

    return(
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
            <Button variant="contained" color="primary" type="submit">
                Login
            </Button>
            <Link
                to="/register"
                style={{
                    marginTop: '16px',
                    marginLeft: '10px',
                    display: 'inline-block',
                    color: '#3f51b5',
                    textDecoration: 'none',
                }}
            >
                Don't have an account? Register
            </Link>
        </form>
    );
};
export default LoginForm;
