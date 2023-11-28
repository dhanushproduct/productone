import { logincontext } from "./Logincontext";
import React,{useState,} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Userloginstore({children}){  

    const [currentuser,setcurrentuser]=useState({})
    const [loginerror,setloginerror]=useState("")
    const [UserloginStatus,setUserloginStatus]=useState(false)
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
                 setcurrentuser(response.data.user.username)
                 setUserloginStatus(true)
                 setloginerror("")
                 localStorage.setItem("token",response.data.token)
                 localStorage.setItem("type",response.data.type)
                 const id = response.data.user._id;    
                 localStorage.setItem("id",id)
                 navigate(`/dashboard/${id}`);
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

    const Signupuser=(userobj)=>{
        console.log(userobj);
        //make http post request to server new user to local api
        axios
        .post('http://localhost:4000/api/users/userssignup',userobj)
     .then(response=>{
      //  console.log(response.message)
       if(response.status == 200)
       {
           setcurrentuser(response.data.user.name)
           setUserloginStatus(true)
           setloginerror("")
           localStorage.setItem("token",response.data.token)
           localStorage.setItem("type",response.data.type)
           const id = response.data.user._id;    
           localStorage.setItem("id",id)
           navigate(`/profile/page1/${id}`);
       }
     })
     .catch(err=>{
      if(err.response){
          if(err.response.status == 401){
              alert('Account with this mail id already exists')
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
        <logincontext.Provider value={[currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,Signupadmin,Logoutuser]}>{children}</logincontext.Provider>
    )
}
export default Userloginstore