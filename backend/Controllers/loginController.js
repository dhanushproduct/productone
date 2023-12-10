const Users = require('../Models/signupModel')
const Profile = require('../Models/profileModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { ObjectId } = mongoose.Types;
function createEmptyProfile(userId) {
  return {
    UserId: new ObjectId(userId),
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
    education: [{
      levelofedu: "",
      field: "",
      school: "",
      city: "",
      country: "",
      fromMonth: "",
      fromYear: "",
    }],
    jobs: [{
      jobTitle: "",
      company: "",
      country: "",
      city: "",
      fromMonth: "",
      fromYear: "",
      description: "",
      toMonth: "",
      toYear: "",
    }],
    skills: [""],
    currentRole: "",
    WorkLocation: [""],
    Survey: {
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
    }
  };
}



const login = async (req, res) => {
    try{
        const { email,password} = req.body;
        const existingUser = await Users.findOne({ 'email':email,'password':password });

    if (!existingUser) {
      return res.status(401).json({ error: "Enter correct emailid/password" });
    }

    let jwttoken =jwt.sign({email: email},"abcdefg",{expiresIn: '2h'})
    res.status(200).json({ message: "User logged in successfully",user: existingUser,token:jwttoken,type:"user" });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}  

const signup = async (req, res) => {
    try{
        const { email,name,password} = req.body;
        const existingUser = await Users.findOne({'email':email});

    if (existingUser) {
      return res.status(401).json({ error: "User with the same username already exists." });
    }

    const newUser = new Users({
      name:name,
      email:email,
      password:password,
    });

    await newUser.save();

    // Create an empty profile for the new user
    const emptyProfile = createEmptyProfile(newUser._id);
    console.log(emptyProfile)
    const newProfile = new Profile(emptyProfile);
    await newProfile.save();

        

    let jwttoken =jwt.sign({email: email},"abcdefg",{expiresIn:2000})
    res.status(200).json({ message: "User account signedup successfully", user: newUser,token:jwttoken,type:"user" });
    }catch(err){
        console.error("Error during signup:", err);
        res.status(500).json({ error: err.message });
      }
}  


module.exports = {login,signup}