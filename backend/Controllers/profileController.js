const Profile = require('../Models/profileModel')
const mongoose = require('mongoose')


const editprofile = async (req, res) => {
    try {
      const details = req.body;
      const id = req.params.id;
      const key = Object.keys(details)[0];
      console.log(key);
      var updatedUser;
      if(key == 'jobs'){
        updatedUser = await Profile.updateOne(
            { UserId: id },
            { $push: { key: details[key] } }
          );
      }
      else{
      updatedUser = await Profile.updateOne({ UserId: id }, details);
      }
  
      if (updatedUser.nModified === 0) {

        return res.status(404).json({ message: "User not found", id: id });
      }
  
      return res.status(200).json({ message: "Success", updated: updatedUser, details: details });
    } catch (err) {
      console.error('Error in editprofile:', err);
      return res.status(500).json({ message: "Internal server error", error: err });
    }
  };


  module.exports = {editprofile};
