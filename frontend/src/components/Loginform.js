import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { FcGoogle } from "react-icons/fc";
// import { GrGithub } from "react-icons/gr";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom"
export default function Loginform() {
  
 const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitform = (data) => {
    console.log(data);
    navigate("/profile/page1")
  };
  const [first, setfirst] = useState(true);
  const showpass = () => {
    setfirst(!first);
  };

  return (
    <div className="">
      <h1 className="text-center py-3 text-2xl font-bold font-sans">
        Log in
      </h1>
      {/* <p className="text-center">Please select one of the following</p>
      <br />
      <div className="flex flex-col justify-center items-center">
        <button className="btn border-2 border-slate-100 w-[80%] flex gap-3 items-center justify-center p-3 rounded-md">
          <FcGoogle size={20} />
          <p className="text-md font-semibold">Log in with Google</p>
        </button>
      </div>
      <br />
      <div className="flex flex-col justify-center items-center">
        <button className="btn border-2 border-slate-100 w-[80%] flex gap-3 items-center justify-center p-3 rounded-md">
          <GrGithub size={20} />
          <p className="text-md font-semibold">Log in with GitHub</p>
        </button>
      </div>
      <br />
      <div className="flex justify-between items-center px-6">
        <hr className="w-[45%] border-black" /> or{" "}
        <hr className="w-[45%] border-black" />
      </div> */}

      <form onSubmit={handleSubmit(submitform)} className="p-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border-b-4 border-2 text-gray-800 rounded-md my-2"
          name="Email"
          required
          {...register("email")}
        />
        <input
          type={first ? "password" : "text"}
          placeholder="Password"
          className="w-full p-2 border-b-4 border-2 text-gray-800 rounded-md my-2"
          name="password"
          required
          {...register("password")}
        />
        <div className="flex md:justify-between py-4 flex-col md:flex-row gap-4">
          <div>
            <input type="checkbox" name="show" id="show" onChange={showpass} />
            <label htmlFor="show"> Show password</label>
          </div>
          <p className=" underline text-blue-500 cursor-pointer">
            forgot password?
          </p>
        </div>
        <div className="mt-2 flex flex-row-reverse">
          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-900 duration-300 text-white font-bold py-2 px-4 rounded-xl"
          >
            Log in
          </button>
        </div>
      </form>
      <br />
      <hr />
      <br />
      <div className="text-md text-center">
        Don't have an account?{" "}
        <span>
          <NavLink
            to="/signup"
            onClick={() => {
              window.scroll(0, 0);
            }}
            className="text-blue-800 hover:text-blue-900 font-semibold"
          >
            {" "}
            Create!
          </NavLink>
        </span>
      </div>
      <br />
    </div>
  );
}
