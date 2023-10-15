import React from "react";
import { useForm } from "react-hook-form";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitform = (data) => {
    console.log(data);
  };

  return (
    <div className=" flex items-center justify-center m-[3rem]">
      <div className="flex lg:flex-row flex-col  w-[90vw] min-h-[80vh] justify-center items-center  bg-slate-100 border-2 p-3 rounded-lg shadow-2xl shadow-slate-400">
        <div className=" lg:w-[40%] lg:h-full p-2">
          <h1>
            <span className="text-[4rem] uppercase text-blue-400">
              Login <br />
            </span>
            <span className=" text-[1.5rem] capitalize text-blue-600">
              for greater experience
            </span>
          </h1>
          <p className="p-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quam odio officiis necessitatibus minus optio magnam itaque vel
            molestiae esse, quos voluptate quia minima ipsa, nobis fuga
            temporibus excepturi quaerat!
          </p>
        </div>
        <div className=" lg:w-[50%] h-full p-2">
          <div className="m-4 relative">
            <h1 className="py-2 text-lg uppercase">Create your account here</h1>
            <form onSubmit={handleSubmit(submitform)}>
              
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border-b-2 text-gray-800 rounded-md my-2"
                name="Email"
                required
                {...register("email")}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border-b-2 text-gray-800 rounded-md my-2"
                name="password"
                required
                {...register("password")}
              />
              
              <p className=" underline text-blue-500 cursor-pointer">
                forgot password?
              </p>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                >
                  Log in 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
