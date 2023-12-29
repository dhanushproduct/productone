import { logincontext } from "./Logincontext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import { toast } from "react-toastify";

function Userloginstore({ children }) {
  const [currentuser, setcurrentuser] = useState({});
  const [loginerror, setloginerror] = useState("");
  const [UserloginStatus, setUserloginStatus] = useState(false);
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const Loginuser = (userobj) => {
    console.log(userobj);
    //make http post request to server new user to local api
    axios
      .post("http://localhost:4000/api/users/userslogin", userobj)
      .then((response) => {
        //  console.log(response.message)
        if (response.status == 200) {
          setUserloginStatus(true);
          setloginerror("");
          let token = response.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("type", response.data.type);
          // // Hash the user ID
          // const id = response.data.user._id;
          // const hashedId = bcrypt.hashSync(id, 10); // You can adjust the number of salt rounds
          // const hashedIdWithoutSlashes = hashedId.replace(/\//g, '');

          // Store the hashed ID in local storage
          toast.success("Login successfull!!")
          navigate(`/dashboard/${token}`);
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 404) {
            // toast('Enter correct mail id')
            toast.error("Enter correct mail id");
          } else if (err.response.status == 401) {
            // toast('Enter correct password')
            toast.error("Enter correct password");
          } else {
            // toast('Login Error')
            toast.error("Login error");
            setloginerror(err.response.data.message);
          }
        } else {
          toast.error("Unexpected Error");
        }
      });
  };

  const VerifyOTP = (userobj, writtenOtp) => {
    console.log(userobj);
    console.log(writtenOtp);
    if (writtenOtp == otp) {
      //make http post request to server new user to local api
      axios
        .post("http://localhost:4000/api/users/verifyOTP", userobj)
        .then((response) => {
          //  console.log(response.message)
          if (response.status == 200) {
            console.log(response.data);
            const token = response.data.token;
            localStorage.setItem("token", token);
            navigate(`/profile/page1/${token}`);
            window.scroll(0, 0);
          }
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status == 401) {
              toast.warn("Account with this mail id already exists");
            } else {
              toast.error(err.response.data.message);
              setloginerror(err.response.data.message);
            }
          } else {
            toast.error("Unexpected Error");
          }
        });
    } else {
      toast.error("Enter Correct OTP");
    }
  };

  const Signupuser = (userobj) => {
    console.log(userobj);
    //make http post request to server new user to local api

    // request otp
    axios
      .post("http://localhost:4000/api/users/userssignup", userobj)
      .then((response) => {
        //  console.log(response.message)
        if (response.status == 200) {
          console.log(response.data);
          setOtp(response.data.otp);
          toast.success("OTP successfully sent");
          return response.data;
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 401) {
            toast.warn("Account with this mail id already exists");
          } else {
            toast(err.response.data.message);
            setloginerror(err.response.data.message);
          }
        } else {
          toast.error("Unexpected Error");
        }
      });
  };

  const verifyotp = (userobj) => {
    // to complete
  };

  const Signupadmin = (userobj) => {
    console.log(userobj);
    //make http post request to server new user to local api
    axios
      .post("http://localhost:4000/api/admin/adminsignup", userobj)
      .then((response) => {
        //  console.log(response.message)
        if (response.status == 200) {
          setcurrentuser(response.data.admin.username);
          setUserloginStatus(true);
          setloginerror("");
          localStorage.setItem("token", response.data.token);
          const id = response.data.admin._id;
          localStorage.setItem("id", id);
          navigate(`/admindashboard/${id}`);
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 400) {
            toast("Username already exists");
          } else {
            toast("Login Error");
            setloginerror(err.response.data.message);
          }
        } else {
          toast("Unexpected Error");
        }
      });
  };
  const Logoutuser = () => {
    toast.success("You have succesfully logged out");
    localStorage.clear();
    setUserloginStatus(false);
    navigate("/");
  };
  return (
    <logincontext.Provider
      value={[
        currentuser,
        loginerror,
        UserloginStatus,
        Loginuser,
        Signupuser,
        VerifyOTP,
        Signupadmin,
        Logoutuser,
      ]}
    >
      {children}
    </logincontext.Provider>
  );
}
export default Userloginstore;
