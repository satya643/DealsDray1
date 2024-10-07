const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { generateOtp } = require('../utils/otpGenerater');
const sendOTPEmail = require('../services/emailService');
const OTP = require('../models/OTP');

// Register user
exports.register = async (req, res) => {
    const { username, password, email } = req.body;

    console.log(req.body);
    try {

        let user = await User.findOne({ username });

        console.log(user);
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }


        user = new User({
            username,
            password,
            email
        });

        console.log(user)
        //save in db
        await user.save();
        res.status(200).json({ msg: "User Created Successfully" });
    } catch (err) {
        console.error(err.message);
        console.log(err,'Token error in register');
        res.status(500).send('Server error');
    }
};

//Login userr

exports.login = async(req,res) => {
  const {username, password} = req.body;

  try {
       const user = await User.findOne({username});

       if(!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).json({msg:'Invalid credentials'});
       }

      const newOtp = new OTP(generateOtp());
      //send otp to email
      await sendOTPEmail.sendOTPEmail(user.email, newOtp.otp);
      await newOtp.save();

      //create a jwt payload
       const payload = {
        user: {
          id: user.id
        }
      };

       // Sign the token and send it in response
       jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
        (err, token) => {
            if (err) throw err;
            console.log(err);
            res.json({ user, token: token, msg: "OTP Sent Successfully" });
        }
    );

  } catch (error) {
    console.error(error.message);
    console.log(error,'Token error in login');
    res.status(500).send('Server Error');
  };
}
//send otp to user
 exports.sendOtp = async(req,res) => {
  const {email} = req.body;
  const {otp, expiresTime} = generateOtp();
  const dispatch = useDispatch();

  try {
     const user = await User.findOne({ email});

    if(!user) {
      return res.status(404).json({ msg: 'User not found' })
    }
    //create new otp record
    const newOtp = new otp({otp, expiresTime});
    await newOtp.save();

    //send otp to email
    await sendOTPEmail(email, 'Your OTP Code', `Your OTP code is ${otp}`);
    res.json({mgs:'OTP sent'})
  } catch (error) {
      console.error(error.message);
      console.log(error,"send otp mail error");
      res.status(500).send('Server error');
     }
 };
 //verify the OTP

 exports.verifyOtp = async (req,res) => {
  const {otp} = req.body;
  try {
    const otpRecord =   await OTP.findOne({otp});
    if (!otpRecord) {
      return res.status(400).json({ msg: 'Invalid OTP' });
    }
    res.json({msg:'OTP Verified'});
  } catch (error) {
    console.error(error.message);
    console.log(error,"Verify OTP error");
    res.status(500).send('Server error');
  }
};
