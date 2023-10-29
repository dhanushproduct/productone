import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom"

export default function Profile2({formdetails }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitform = (data) => {
    formdetails.FullName = data;
    // console.log(data);
    navigate("/profile/page3")
    window.scroll(0, 0)
  };
  return (
    <div>
      <div className=" h-1 w-full flex">
        <div className="h-full bg-blue-900 w-[20%]"></div>
        <div className="h-full bg-white w-[80%]"></div>
      </div>
      <div className="m-4 relative">
        <div className="py-3 text-2xl font-bold font-sans">
          What is your name?
        </div>
        <br />
        <br />
        <form onSubmit={handleSubmit(submitform)}>
          <div>
            <label htmlFor="firstname" className=" font-semibold">
              First Name <span className=" text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border-b-4 border-2 text-gray-800 rounded-md my-2"
              name="firstname"
              required
              {...register("FirstName")}
            />
          </div>
          <div className="my-4">
            <label htmlFor="firstname" className=" font-semibold">
              Last Name <span className=" text-red-500">*</span>
            </label>
            <input
              type="text"
            //   placeholder="Last Name"
              className="w-full p-2 border-b-4 border-2 text-gray-800 rounded-md my-2"
              name="lastname"
              required
              {...register("LastName")}
            />
          </div>
          <div className="flex flex-row-reverse pt-4">

          <button
            type="submit"
            onClick={() => {window.scroll(0, 0)}}
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-xl md:w-[40%] w-[100%] my-4 md:my-0"
            >
           Save & Continue
          </button>
            </div>
        </form>
      </div>
    </div>
  );
}