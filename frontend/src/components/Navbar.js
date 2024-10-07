import React from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Link, Box } from '@material-ui/core';
import { useAuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { logout, isAuthenticated } = useAuthContext();
    const navigate = useNavigate();

    console.log('Navbar ==> ', isAuthenticated);
    const logoutPage = () => {
        logout();
        navigate('/login');
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Button component={RouterLink} to="/" color="inherit">Home</Button>
                    {isAuthenticated && (
                        <>
                            <Button component={RouterLink} to="/dashboard" color="inherit" style={{ marginLeft: '20px' }}>Dashboard</Button>
                            <Button component={RouterLink} to="/employees" color="inherit" style={{ marginLeft: '20px' }}>Employee List</Button>
                            <Button component={RouterLink} to="/create-employee" color="inherit" style={{ marginLeft: '20px' }}>Create Employee</Button>
                        </>
                    )}
                </Typography>
                <Box marginRight={2}>
                    {isAuthenticated && (
                        <Button onClick={logoutPage} variant="outlined" color="inherit">Logout</Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
