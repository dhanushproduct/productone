const Profile = require("../Models/profileModel");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const editprofile = async (req, res) => {
  try {
    const details = req.body;
    const id = req.params.id;
    const key = Object.keys(details)[0];
    console.log(key);
    var updatedUser;
    updatedUser = await Profile.updateOne({ UserId: id }, details);

    if (updatedUser.nModified === 0) {
      return res.status(404).json({ message: "User not found", id: id });
    }

    return res
      .status(200)
      .json({ message: "Success", updated: updatedUser, details: details });
  } catch (err) {
    console.error("Error in editprofile:", err);
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
};

const getProfile = async (req, res) => {
  try {
    const token = req.params.token;
    const decoded = jwt.verify(token, process.env.USER_SECRET_KEY);
    const id = decoded._id
    const existing_profile = await Profile.findOne({ UserId: id });

    if (!existing_profile) {
      return res.status(404).json({ message: "user not found", id: id });
    }

    return res.status(200).json({
      message: "successfully retrieved",
      existing_profile: existing_profile,
      id: id,
    });
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({message:err.message});
    } else {
    }
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

module.exports = { editprofile, getProfile };
