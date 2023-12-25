import React, { useContext, useEffect } from "react";
import TimelineComponent from "../components/EduExp";
import { GoPlus } from "react-icons/go";
import { LuPencilLine } from "react-icons/lu";
import Recognitions from "../components/Recognitions";
import Projects from "../components/Projects";
import { Button } from "keep-react";
import { FaPlus, FaRegPaperPlane  } from "react-icons/fa6";
import { logincontext } from "../contexts/Logincontext";
import {useParams} from 'react-router-dom'

const Layout = () => {
  const [currentuser,loginerror,UserloginStatus,Loginuser,Signupuser,VerifyOTP,Signupadmin,Logoutuser, getprofile, dashboard, setdashboard] = useContext(logincontext);
  const { id } = useParams();
  const skills = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "HTML/CSS",
    "Node.js",
    "React.js",
    "Angular",
    "Vue.js",
    "Django",
    "Flask",
    "Express.js",
    "Spring Boot",
    "MongoDB",
    "MySQL",
  ];
  useEffect(() => {
    console.log("Component Mounted");
    getprofile(id);
    console.log("After getprofile");
    console.log(dashboard);
  }, [id]);
  
  return (
    <div className="flex md:flex-row flex-col justify-around  min-h-screen  gap-4 bg-gray-100 p-4">
      <div className=" rounded-md md:w-[65%] w-[100%] ">
        <div className="w-full h-[25vh] aspect-auto bg-slate-600 rounded-t-md"></div>
        <div className="w-full p-4 bg-white rounded-xl">
          <div className="w-[20vh] h-[20vh] bg-slate-400 rounded-full relative mt-[-15vh]"></div>
          <div className="flex flex-row justify-between items-center p-6">
            <div className=" font-bold text-gray-900">
              <div className="text-xl">
                
              DHANUSH GUMMADAVALLI
              </div>
              <h2 className="text-lg font-medium text-gray-900">
                Software Engineer
              </h2>
              <h2 className=" text-sm font-medium text-gray-700">
                1232 Followers - 500+ Connections
              </h2>
            </div>
            <p className="text-gray-500 text-md">Current Role</p>
          </div>
          <div className="px-6 flex gap-4">
            <Button size="sm"  color="info" pill={true}>
              <div  className="flex gap-1 justify-center items-center">

              <FaPlus size={15} /> <p className="text-lg">
                 Follow
                </p>
              </div>
            </Button>
            {/* <Button size="sm"  color="info" pill={true}>
              <div  className="flex gap-1 justify-center items-center">

              <FaRegPaperPlane  size={15} /> <p className="text-lg">
                 Message
                </p>
              </div>
            </Button> */}
          </div>
        </div>
        <div className=" py-4 space-y-4 ">
          <div className="space-y-2 w-full p-4 bg-white rounded-xl">
            <h3 className="text-lg font-medium text-gray-900 p-4">
              Recognitions
            </h3>
            <div>
              <Recognitions />
            </div>
          </div>
          <div className="space-y-2 w-full p-4 bg-white rounded-xl">
            <h3 className="text-lg font-medium text-gray-900 p-4">Projects</h3>
            <div>
              <Projects />
            </div>
          </div>
          <div className="space-y-2 w-full p-4 bg-white rounded-xl">
            <h3 className="text-lg font-medium text-gray-900 p-4">Skills</h3>
            <ul className="flex flex-wrap gap-4 pl-4 text-gray-500 list-none">
              {skills.map((item, key) => (
                <li
                  className=" border-gray-100 hover:bg-slate-100 hover:shadow-lg hover:scale-110 duration-300 cursor-pointer border-2 p-2 rounded-2xl"
                  key={key}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2 w-full p-4 bg-white rounded-xl ">
            <div className="text-lg font-medium text-gray-900 flex justify-between p-4">
              Experience{" "}
              <div className="flex gap-4">
                <div className=" w-auto p-2 hover:bg-slate-200 rounded-full duration-150">
                  <GoPlus />
                </div>
                <div className=" w-auto p-2 hover:bg-slate-200 rounded-full duration-150">
                  <LuPencilLine />
                </div>
              </div>
            </div>
            <TimelineComponent />
            <TimelineComponent />
          </div>
          <div className="space-y-2 w-full p-4 bg-white rounded-xl ">
            <div className="text-lg font-medium text-gray-900 flex justify-between p-4">
              Education{" "}
              <div className="flex gap-4">
                {" "}
                <div className=" w-auto p-2 hover:bg-slate-200 rounded-full duration-150">
                  <GoPlus />
                </div>
                <div className=" w-auto p-2 hover:bg-slate-200 rounded-full duration-150">
                  <LuPencilLine />
                </div>
              </div>
            </div>
            <TimelineComponent />
          </div>
          <div className="flex flex-row space-x-2 w-full p-4 bg-white rounded-xl">
            <h3 className="text-lg font-medium text-gray-900">Location</h3>
            <p className="text-gray-500">Miyapur, India</p>
          </div>
        </div>
      </div>
      <div className="md:w-[20%] w-[100%] h-full bg-gray-100  rounded-xl"></div>
    </div>
  );
};

export default Layout;
