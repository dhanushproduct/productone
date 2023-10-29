import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom"

export default function Profile1({formdetails}) {
  const { control, handleSubmit, setError } = useForm();
 const navigate = useNavigate();
  const onFileSubmit = (data) => {
    formdetails.uploadedFile = data.file;
    // console.log(data);
    navigate("/profile/page2");

  };

  const validateFile = (file) => {
    if (file[0].type !== "application/pdf") {
      return false;
    }
    return true;
  };

  return (
    <div className="m-4 relative">
      <div className="text-center py-3 text-2xl font-bold font-sans">
        Upload a Resume/CV
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onFileSubmit)}
          className="flex flex-col p-4 justify-center"
        >
          <input type="file" className="p-4 my-4" required/>
          {!validateFile && (
            <p className=" text-red-500">please enter the valid file</p>
          )}
          <div className="flex flex-row-reverse">

           <button
            type="submit"
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
