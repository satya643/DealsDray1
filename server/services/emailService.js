const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOTPEmail = (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  console.log('Sending OTP email...', mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error('Error sending OTP email:', error);
    }
    console.log('OTP email sent:', info.response);
  });
};

module.exports = { sendOTPEmail };
