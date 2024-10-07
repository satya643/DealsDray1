const crypto = require('crypto');

const generateOtp = () => {
    const otp = crypto.randomBytes(3).toString('hex').toUpperCase();
    const expirationTime = new Date(Date.now() + 5 * 60 * 1000); // OTP valid for 5 minutes
    return { otp, expirationTime };
};

module.exports = { generateOtp };
