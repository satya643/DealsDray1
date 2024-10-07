import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';

const Dashboard = () => (
    <Container>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Typography variant="h4" component="h1" align="center">
                Welcome to the dashboard!
            </Typography>
        </Box>
    </Container>
);

export default Dashboard;
