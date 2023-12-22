import { logincontext } from "./Logincontext";
import React,{useState,} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';


function Userloginstore({children}){  

    const [currentuser,setcurrentuser]=useState({})
    const [loginerror,setloginerror]=useState("")
    const [UserloginStatus,setUserloginStatus]=useState(false)
    const [otp,setOtp]=useState('')
    const [dashboard, setdashboard] = useState();

    const navigate = useNavigate();

    const Loginuser=(userobj)=>{
              console.log(userobj);
              //make http post request to server new user to local api
              axios
              .post('http://localhost:4000/api/users/userslogin',userobj)
           .then(response=>{
            //  console.log(response.message)
             if(response.status == 200)
             {
                 setcurrentuser(response.data.user)
                 setUserloginStatus(true)
                 setloginerror("")
                 localStorage.setItem("token",response.data.token)
                 localStorage.setItem("type",response.data.type)
                // Hash the user ID
                const id = response.data.user._id;
                const hashedId = bcrypt.hashSync(id, 10); // You can adjust the number of salt rounds
                const hashedIdWithoutSlashes = hashedId.replace(/\//g, '');



                // Store the hashed ID in local storage
                localStorage.setItem("id", hashedIdWithoutSlashes);                 
                navigate(`/dashboard/${hashedIdWithoutSlashes}`);
             }
           })
           .catch(err=>{
            if(err.response){
                if(err.response.status == 404){
                    alert('Enter correct mail id')
                }
                else if(err.response.status == 401){
                    alert('Enter correct password')
                }
                else{
                  alert('Login Error')
                  setloginerror(err.response.data.message)
                }
              }
              else{
                alert('Unexpected Error')
              }
           })
    }

    const VerifyOTP = (userobj,writtenOtp) =>{
      console.log(userobj);
      console.log(writtenOtp);
      if(writtenOtp == otp){
      //make http post request to server new user to local api
      axios
      .post('http://localhost:4000/api/users/verifyOTP',userobj)
   .then(response=>{
    //  console.log(response.message)
     if(response.status == 200)
     {
         console.log(response.data);
         const id = response.data.user._id;    
         localStorage.setItem("id",id)
         navigate(`/profile/page1/${id}`);
        window.scroll(0, 0);
     }
   })
   .catch(err=>{
    if(err.response){
        if(err.response.status == 401){
            alert('Account with this mail id already exists')
        }
        else{
          alert(err.response.data.message)
          setloginerror(err.response.data.message)
        }
      }
      else{
        alert('Unexpected Error')
      }
   })
  }
  else{
    alert('Enter Correct OTP');
  }
    }

    
    const Signupuser=(userobj)=>{
        console.log(userobj);
        //make http post request to server new user to local api

        // request otp
        axios
        .post('http://localhost:4000/api/users/userssignup',userobj)
     .then(response=>{
      //  console.log(response.message)
       if(response.status == 200)
       {
           console.log(response.data);
           setOtp(response.data.otp)
           return response.data;
// =======
//            const id = response.data.user._id;    
//            localStorage.setItem("id",id)
//            navigate(`/profile/page1/${id}`);
//            window.scroll(0, 0);
// >>>>>>> fb0632148ade4c01bfbde6d887a237cadbcd166e
       }
     })
     .catch(err=>{
      if(err.response){
          if(err.response.status == 401){
              alert('Account with this mail id already exists')
          }
          else{
            alert(err.response.data.message)
            setloginerror(err.response.data.message)
          }
        }
        else{
          alert('Unexpected Error')
        }
     })
}

const verifyotp = (userobj) => {
  // to complete
}


const getprofile = (id) => {

  axios.get(`http://localhost:4000/api/users/getprofile/${id}`).then(
    response => {
      if(response.status == 200){
        setdashboard(response.data.existing_profile);
        // console.log(response.data.existing_profile);
      }
    }
  ).catch(err => {
    alert("user error");
  })
}



const Signupadmin=(userobj)=>{
    console.log(userobj);
    //make http post request to server new user to local api
    axios
    .post('http://localhost:4000/api/admin/adminsignup',userobj)
 .then(response=>{
  //  console.log(response.message)
   if(response.status == 200)
   {
       setcurrentuser(response.data.admin.username)
       setUserloginStatus(true)
       setloginerror("")
       localStorage.setItem("token",response.data.token)
       const id = response.data.admin._id;    
       localStorage.setItem("id",id)
       navigate(`/admindashboard/${id}`);
   }
 })
 .catch(err=>{
  if(err.response){
      if(err.response.status == 400){
          alert('Username already exists')
      }
      else{
        alert('Login Error')
        setloginerror(err.response.data.message)
      }
    }
    else{
      alert('Unexpected Error')
    }
 })
}
    const Logoutuser=()=>{
        localStorage.clear()
        setUserloginStatus(false)
        navigate('/')
        alert('You have succesfully logged out')
    }
    return (
        <logincontext.Provider value={[currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,VerifyOTP,Signupadmin,Logoutuser, getprofile, dashboard, setdashboard]}>{children}</logincontext.Provider>
    )
}
export default Userloginstore