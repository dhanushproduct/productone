const Users = require('../Models/signupModel')
const Profile = require('../Models/profileModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")



let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dhanush.productone@gmail.com",
    pass: "xnpiythticlyvzgq",
  },

})
const { ObjectId } = mongoose.Types;

function createEmptyEducation() {
  return {
    levelofedu: "",
    field: "",
    school: "",
    city: "",
    country: "",
    fromMonth: "",
    fromYear: "",
  };
}


function createEmptyJob() {
  return {
    jobTitle: "",
    company: "",
    country: "",
    city: "",
    fromMonth: "",
    fromYear: "",
    description: "",
    toMonth: "",
    toYear: "",
  };
}

function createEmptySurvey() {
  return {
    gender: "",
    race: {
      isAsian: false,
      isPacific: false,
      isBlack: false,
      isWhite: false,
      isLatinx: false,
      isNotListed: false,
      isNativeAmerican: false,
    },
    sex: "",
    age: "",
    militarystatus: "",
  };
}

function createEmptyProfile(userId) {
  return {
    UserId: userId,
    FullName: {
      FirstName: "",
      LastName: "",
    },
    Location: {
      Country: "",
      StreetAddress: "",
      City: "",
      PinCode: "",
    },
    education: [createEmptyEducation()],
    jobs: [createEmptyJob()],
    skills: [],
    currentRole: "",
    WorkLocation: [],
    Survey: createEmptySurvey(),
  };
}

// function createEmptyProfile(userId) {
//   return {
//     UserId: userId,
//     FullName: {
//       FirstName: "",
//       LastName: "",
//     },
//     Location: {
//       Country: "",
//       StreetAddress: "",
//       City: "",
//       PinCode: "",
//     },
//     education: [{
//       levelofedu: "",
//       field: "",
//       school: "",
//       city: "",
//       country: "",
//       fromMonth: "",
//       fromYear: "",
//     }],
//     jobs: [{
//       jobTitle: "",
//       company: "",
//       country: "",
//       city: "",
//       fromMonth: "",
//       fromYear: "",
//       description: "",
//       toMonth: "",
//       toYear: "",
//     }],
//     skills: [],
//     currentRole: "",
//     WorkLocation: [],
//     Survey: {
//       gender: "",
//       race: {
//         isAsian: false,
//         isPacific: false,
//         isBlack: false,
//         isWhite: false,
//         isLatinx: false,
//         isNotListed: false,
//         isNativeAmerican: false,
//       },
//       sex: "",
//       age: "",
//       militarystatus: "",
//     }
//   };
// }




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

    let jwttoken = jwt.sign({ email: email }, "abcdefg", { expiresIn:  '2h' });
    res.status(200).json({ message: "User logged in successfully", user: existingUser, token: jwttoken, type: "user" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // const {otp} = req.body.otp;
    const existingUser = await Users.findOne({ 'email': email });

    if (existingUser) {
      return res.status(401).json({ error: "User with the same email already exists." });
    }

    const otpSent = await sendOTPVerificationEmail(email);
    console.log(otpSent);
    
    return res.status(200).json({message:'Successfully Sent Mail',otp:otpSent});
    
  } catch (err) {
        console.error("Error during signup:", err);
    res.status(500).json({ error: err.message });
  }
}


const sendOTPVerificationEmail = async (email) => {
  console.log('Hello')
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
    await transporter.sendMail(mailoptions);
    return otp;
  }
  catch(err){
    res.status(500).json({ error: err.message })
  }
}


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
    // const newProfile = new Profile(createEmptyProfile(newUser._id));
    
    // Save the new profile
    // await newProfile.save();

    return res.status(200).json({ message: 'Successfully verified', user: newUser });
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
}
module.exports = {login,signup, verifyotp, resendotp}