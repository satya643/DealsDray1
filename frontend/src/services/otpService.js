import axios from 'axios';

export const sendOTP = (email) => {
  return axios.post('http://localhost:5000/api/auth/send-otp', { email });
};

export const verifyOTP = (otpData) => {
  return axios.post('http://localhost:5000/api/auth/verify', otpData);
};
