import React from "react";
import { useForm } from "react-hook-form";
import surveyQuestions from "../../asserts/VolDec";
import { useNavigate } from "react-router-dom";

export default function Profile9({ formdetails }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const skip = () => {};

  const onSubmit = (data) => {
    formdetails.Survey = data;
    navigate("/dashboard")
    window.scroll(0, 0);
    // console.log(data);
  };

  return (
    <div>
      <div className="h-1 w-full flex">
        <div className="h-full bg-blue-900 w-[100%]"></div>
        <div className="h-full bg-white w-[0%]"></div>
      </div>
      <div className="m-4 relative p-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-3 text-2xl font-bold font-sans">
            Voluntary diversity survey
          </div>
          <div className=" text-justify p-2 text-sm">
            At AspireUp we promote diversity and inclusion to help build
            equitable futures. We prohibit discrimination and harassment of any
            kind based on any protected characteristics as outlined by federal,
            state, or local laws.
            <br />
            In support of these efforts, we invite you to complete a voluntary
            self-identification survey. Our clients may consider the information
            you share in their efforts to increase underrepresented candidates
            and/or create programs to support the diverse populations they
            employ. This form is not used to make decisions about the terms and
            conditions of employment.
            <br />
            <span className=" text-slate-600 font-semibold">
              Providing this information is always optional and it will not be
              displayed on your profile.
            </span>
          </div>
          <div>
            {Object.entries(surveyQuestions).map(([question, options]) => (
              <div key={question}>
                <div className="font-semibold p-2 m-2">{question}</div>
                <div className="flex flex-wrap">
                  {options.map((option) => (
                    <div key={option} className="flex items-center">
                      {question ===
                      "What is your race? (Select all that apply)" ? (
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={option}
                            {...register(`race.${option}`)}
                            className="sr-only"
                          />
                          <label
                            htmlFor={option}
                            className={`cursor-pointer p-2 border rounded-md ${
                              watch(`race.${option}`)
                                ? "bg-blue-900 text-white m-1"
                                : "m-1 border-gray-300 hover:bg-blue-200"
                            }`}
                          >
                            {option}
                          </label>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id={option}
                            value={option}
                            {...register(question)}
                            className="sr-only"
                          />
                          <label
                            htmlFor={option}
                            className={`cursor-pointer p-2 border rounded-md ${
                              watch(question) === option
                                ? "bg-blue-900 text-white m-1"
                                : "m-1 border-gray-300 hover:bg-blue-200"
                            }`}
                          >
                            {option}
                          </label>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className="flex flex-row-reverse justify-between">
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-1 px-2 rounded-xl md:w-[40%] w-[100%] my-4 md:my-0"
            >
              Save & Continue
            </button>
            <button
              className="text-blue-800 hover:text-blue-900 font-semibold p-2 md:m-2 flex justify-center items-center gap-1"
              onClick={skip}
            >
              Skip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
