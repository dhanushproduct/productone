const Users = require("../Models/signupModel");
const Profile = require("../Models/profileModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dhanush.productone@gmail.com",
    pass: "xnpiythticlyvzgq",
  },
});
const { ObjectId } = mongoose.Types;

function createEmptyEducation() {
  return {
    levelofedu: "1",
    field: "1",
    school: "1",
    city: "1",
    country: "1",
    fromMonth: "1",
    fromYear: "1",
  };
}

function createEmptyJob() {
  return {
    jobTitle: "1",
    company: "1",
    country: "1",
    city: "1",
    fromMonth: "1",
    fromYear: "1",
    description: "1",
    toMonth: "1",
    toYear: "1",
  };
}

function createEmptySurvey() {
  return {
    gender: "1",
    race: {
      isAsian: true,
      isPacific: false,
      isBlack: false,
      isWhite: false,
      isLatinx: false,
      isNotListed: false,
      isNativeAmerican: false,
    },
    sex: "1",
    age: "1",
    militarystatus: "1",
  };
}

function createEmptyProfile(userId) {
  return {
    UserId: userId,
    FullName: {
      FirstName: "1",
      LastName: "1",
    },
    Location: {
      Country: "1",
      StreetAddress: "1",
      City: "1",
      PinCode: "1",
    },
    education: [createEmptyEducation()],
    jobs: [createEmptyJob()],
    skills: ["asdhas"],
    currentRole: "1",
    WorkLocation: ["ashs"],
    Survey: createEmptySurvey(),
  };
}


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Users.findOne({ email: email });

    if (!existingUser) {
      return res.status(401).json({ error: "Enter correct email/password" });
    }

    // Compare the hashed password
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Enter correct email/password" });
    }
    console.log('Before')
    let jwttoken = jwt.sign(existingUser.toObject(), process.env.USER_SECRET_KEY, { expiresIn: "2h" });
    console.log(jwttoken);
    res.status(200).json({
      message: "User logged in successfully",
      token: jwttoken,
      type: "user",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // const {otp} = req.body.otp;
    const existingUser = await Users.findOne({ email: email });

    if (existingUser) {
      return res
        .status(401)
        .json({ error: "User with the same email already exists." });
    }

    const otpSent = await sendOTPVerificationEmail(email);
    console.log(otpSent);

    return res
      .status(200)
      .json({ message: "Successfully Sent Mail", otp: otpSent });

    // // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // const newUser = new Users({
    //   'name': name,
    //   'email': email,
    //   'password': hashedPassword,
    //   'verified': false
    // });

    // await newUser.save().then(async (result) => {
    //   sendOTPVerificationEmail(result, res);
    // //   let jwttoken = jwt.sign({ email: email }, "abcdefg", { expiresIn: 2000 });
    // // res.status(200).json({ message: "User account signed up successfully", user: newUser, token: jwttoken, type: "user" });
    // });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).json({ error: err.message });
  }
};

const sendOTPVerificationEmail = async (email) => {
  // console.log('Hello')
  try {
    const otp = `${Math.floor(100000 + Math.random() * 900000)}`;

    const mailoptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Verify your email",
      html: `<p> Enter <b> ${otp} </b> in the app to verify your email address and complete the signup</p> <p> This code <b> expires in 1 hour</b></p>`,
    };

    const salt = 10;
    const hashedotp = await bcrypt.hash(otp, salt);
    await transporter.sendMail(mailoptions);
    return otp;
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const verifyotp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    // Create a new profile using the user's _id
    const newProfile = new Profile(createEmptyProfile(newUser._id));

    // Save the new profile
    await newProfile.save();

    let jwttoken = jwt.sign(newUser, process.env.USER_SECRET_KEY, { expiresIn: '2h' });

    return res
      .status(200)
      .json({ message: "Successfully verified", token : jwttoken,type:"user"});
  } catch (err) {
    console.error("Error during user registration:", err);
    res.status(500).json({ error: err.message });
  }
};






const resendotp = async (req, res) => {
  // try{
  //   let {userId, email} = req.body;
  //   if(!userId || !email){
  //     throw Error("Empty otp details are not allowed");
  //   }
  //   else{
  //     await UserOTPVerification.deleteOne({userId});
  //     sendOTPVerificationEmail({_id: userId, email}, res);
  //   }
  // }catch(err){
  //   res.status(500).json({
  //     status: "failed",
  //     message: err.message
  //   })
  // }
};
module.exports = { login, signup, verifyotp, resendotp};
