import React from 'react'
import OTPVerificationForm from '../components/OTPVerificationForm'
import {useNavigate} from "react-router-dom";


export const OTPVerificationPage = () => {
    const navigate = useNavigate();
    const onVerify = (otpData) => {
        console.log(otpData);
        navigate('/dashboard');
    }
    return (
        <div>
            <h2>Verify OTP</h2>
            <OTPVerificationForm onVerify={onVerify}/>
        </div>
    );
};
export default OTPVerificationForm;
