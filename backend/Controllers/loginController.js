const Users = require('../Models/signupModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const UserOTPVerification = require("../Models/OtpverificationModel")
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")



let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dhanush.productone@gmail.com",
    pass: "xnpiythticlyvzgq",
  },

})


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Users.findOne({ 'email': email });

    if (!existingUser) {
      return res.status(401).json({ error: "Enter correct email/password" });
    }

    // Compare the hashed password
    const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Enter correct email/password" });
    }

    let jwttoken = jwt.sign({ email: email }, "abcdefg", { expiresIn: 2000 });
    res.status(200).json({ message: "User logged in successfully", user: existingUser, token: jwttoken, type: "user" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


const signup = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const existingUser = await Users.findOne({ 'email': email });

    if (existingUser) {
      return res.status(401).json({ error: "User with the same email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({
      'name': name,
      'email': email,
      'password': hashedPassword,
      'verified': false
    });

    await newUser.save().then((result) => {
      sendOTPVerificationEmail(result, res);
      let jwttoken = jwt.sign({ email: email }, "abcdefg", { expiresIn: 2000 });
    res.status(200).json({ message: "User account signed up successfully", user: newUser, token: jwttoken, type: "user" });
    });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


const sendOTPVerificationEmail = async ({ _id, email}, res) => {
  try{
    const otp = `${Math.floor(100000 + Math.random() * 900000)}`;
    const mailoptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Verify your email",
      html: `<p> Enter <b> ${otp} </b> in the app to verify your email address and complete the signup</p> <p> This code <b> expires in 1 hour</b></p>`
    }
    const salt = 10;
    const hashedotp = await bcrypt.hash(otp, salt);
    const newotpverification = new UserOTPVerification({
      userId: _id,
      otp: hashedotp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });
    await newotpverification.save();
    await transporter.sendMail(mailoptions);
    res.status(202).json({
      status: "pending",
      message: "verification otp email sent",
      data: {
        userId: _id,
        email,
      }
    })
  }
  catch(err){
    res.status(500).json({ error: err.message })
  }
}


const verifyotp = async (req, res) => {
  try{
    let {userId, otp} = req.body;
    if(!userId || !otp){
      throw Error("Empty otp details are not allowed");
    }
    else{
      const user = await UserOTPVerification.findOne({userId });
      if(!user){
        throw new Error("Account record doesnt exist or verified already")
      } 
      else{
        const {expiresAt} = user;
        const hashedotp = user.otp;

        if(expiresAt < Date.now()){
          await user.deleteMany({userId});
          throw new Error("Code has expired, please request again");
        }
        else{
          const validotp = bcrypt.compare(otp, hashedotp);
          if(!validotp){
            throw new Error("Invalid otp");
          }
          else{
            await Users.updateOne({_id: userId}, {verified: true});
            await user.deleteOne({userId});
            res.status(200).json({
              status: "verified",
              message: "user email verified sucessfully"
            })
          }
        }
      }
    }
  }
  catch(err){
    res.status(500).json({message: err.message})
  }
}

const resendotp = async (req, res) => {
  try{
    let {userId, email} = req.body;
    if(!userId || !email){
      throw Error("Empty otp details are not allowed");
    }
    else{
      await UserOTPVerification.deleteOne({userId});
      sendOTPVerificationEmail({_id: userId, email}, res);
    }
     
  }catch(err){
    res.status(500).json({
      status: "failed",
      message: err.message
    })
  }
}
module.exports = {login,signup, verifyotp, resendotp}