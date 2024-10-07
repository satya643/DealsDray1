const Otp = require('../models/OTP')

const otpMiddleware = async (req, res, next) => {
    const { otp } = req.body;

    try {
        // Find OTP in the database
        const otpRecord = await Otp.findOne({ otp });

        if (!otpRecord) {
            return res.status(400).json({ msg: 'Invalid OTP' });
        }

        // Check if OTP is expired
        if (otpRecord.expirationTime < Date.now()) {
            return res.status(400).json({ msg: 'OTP expired' });
        }

        next();
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = otpMiddleware;
