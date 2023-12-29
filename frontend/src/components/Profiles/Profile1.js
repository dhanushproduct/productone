import { Upload } from "keep-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ReLogin from "../../pages/ReLogin";

export default function Profile1({ formdetails }) {
  
  const token  = localStorage.getItem("token");

  const { control, handleSubmit } = useForm();
  // const [file, setFile] = useState(null); // State to store the selected file
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      setFileName(file.name);
    }
  };


  // const onFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   setFile(selectedFile);
  // };

  const onFileSubmit = (data) => {
    formdetails.uploadedFile = fileName;
    navigate(`/profile/page2/${token}`);
  };

  const validateFile = () => {
    if (!fileName) {
      return false;
    }
    if (fileName.type === "application/pdf") {
      return true;
    }
    return false;
  };

  if(token==null){
    return <ReLogin/>
  }
  else{
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
          <Upload
            className="p-4 my-4"
            required
            onFileChange={handleFileChange}
            file={fileName}
          />
          {/* {fileName && (
            <div className="mb-4">
              <embed
                src={URL.createObjectURL(fileName)}
                width="100%"
                height="500"
              />
            </div>
          )} */}
          {/* {!validateFile() && (
            <p className="text-red-500">Please enter a valid PDF file.</p>
          )} */}
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
}
