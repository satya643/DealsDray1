import React, { useState } from 'react';
import { TextField, Button, Container, Box } from '@material-ui/core';
import {verifyOTP} from '../services/otpService';

export const OTPVerificationForm = ({onVerify}) => {
    const [otp, setOtp] = useState('');
    let message = '';
    const handleSubmit = (e) => {
        e.preventDefault();
        verifyOTP({otp})
            .then((response) => onVerify(response.data))
            .catch((error) => {
                console.log(error);
                message = error.response.data || error.response.data.msg;
            });
    };

    return (
        <Container maxWidth="xs">
            <Box bgcolor="background.paper" p={2}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        label="Enter OTP"
                        required
                        fullWidth
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Verify
                    </Button>
                </form>
                <p>{message}</p>
            </Box>
        </Container>
    );
};
export default OTPVerificationForm;
