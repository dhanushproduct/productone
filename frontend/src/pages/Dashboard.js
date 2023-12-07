import React from "react";

const Layout = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center  min-h-screen  gap-4 bg-gray-100 p-4">
      <div className=" rounded-md md:w-[70%] w-[100%] ">
          <div className="w-full h-[25vh] aspect-auto bg-slate-600 rounded-t-md"></div>
        <div className="w-full p-4 bg-white rounded-xl">
          <div className="w-[20vh] h-[20vh] bg-slate-400 rounded-full relative mt-[-15vh]"></div>
          <div className="flex flex-row justify-between items-center p-6">
            <h1 className="text-xl font-bold text-gray-900">
              DHANUSH GUMMADAVALLI
            </h1>
            
          </div>
        </div>
        <div className=" py-4 space-y-4 ">
          <div className="flex flex-col space-y-2 w-full p-4 bg-white rounded-xl">
            <h2 className="text-lg font-medium text-gray-900">
              Software Engineer
            </h2>
            <p className="text-gray-500">Current Role</p>
          </div>
          <div className="space-y-2 w-full p-4 bg-white rounded-xl">
            <h3 className="text-lg font-medium text-gray-900">Skills</h3>
            <ul className="list-disc pl-4 space-y-1 text-gray-500">
              <li>Javascript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="space-y-2 w-full p-4 bg-white rounded-xl">
            <h3 className="text-lg font-medium text-gray-900">
              Education Details
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-gray-500">
              <li>Bachelor of Engineering in Computer Science</li>
            </ul>
          </div>
          <div className="space-y-2 w-full p-4 bg-white rounded-xl">
            <h3 className="text-lg font-medium text-gray-900">
              Job Experience
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-gray-500">
              <li>Software Engineer at Acme Corporation</li>
            </ul>
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
