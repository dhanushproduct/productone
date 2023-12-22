import React from "react";
import { IoMdClose } from "react-icons/io";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function MailOtp({viewmailotp, setviewotp, Signupuser, data, otp, setdata,verifyOTP}) {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  // const [ setviewotp] = useContext(Otpcontext);
  const inputRefs = useRef(
    Array(6)
      .fill(null)
      .map(() => React.createRef())
  );

  const verifyOtp = () => {


    let flag=1;
    for (let i = 0; i < otpValues.length; i++) {
      if (otpValues[i] === "") {
        alert("Enter correct OTP");
        flag=0;
        break;
      }
    }
    if(flag==0){
      return; 
    }

    // alert("otp verified");
    // Signupuser(data);
    alert(otpValues.join(""))
 

    
    const writtenOtp = otpValues.join('');

    verifyOTP(data,writtenOtp);

  };

  const handleOtpChange = (index, value, isBackspace) => {
    if (isBackspace && index > 0 && value === "") {
      inputRefs.current[index - 1].current.focus();
    } else 
    {
      const limitedValue = value.slice(0, 1);
  
      setOtpValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index] = limitedValue;
        return newValues;
      });
  
      if (index < inputRefs.current.length - 1 && limitedValue !== "") {
        inputRefs.current[index + 1].current.focus();
      } 
    }
  };
  const closemodal = () => {
    setviewotp(false);
  }

  const handlepaste = (e) => {
    e.preventDefault(); 
    const pastedData = e.clipboardData.getData('text/plain');
    const otpArray = pastedData.split('').slice(0, 6);
    
    setOtpValues((prevValues) => {
      const newValues = [...prevValues];
      otpArray.forEach((value, index) => {
        if (inputRefs.current[index]) {
          newValues[index] = value;
        }
      });

      return newValues;
    });
    if (inputRefs.current[inputRefs.current.length - 1]) {
      inputRefs.current[inputRefs.current.length - 1].current.focus();
    }
  };

  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className=" w-[100%] h-[70%] bg-white border-2 rounded-xl p-8 text-center ">
      <div className="flex w-full items-end justify-end py-4 cursor-pointer">
      <IoMdClose size={30} onClick={closemodal} />

      </div>

        <h1 className="">
          Please enter the OTP sent to <br /> <b>
             {data.email}  
            </b>
       
         
          <span className=" px-3 text-blue-500 font-semibold">Change</span>{" "}
        </h1>

        <form onPaste={handlepaste}>
          <div className="flex justify-center p-4 m-4">
            {otpValues.map((value, index) => (
              <input
                key={index}
                type="number"
                name={`otp-${index}`}
                id={`otp-${index}`}
                className="border-b-2 m-2 md:m-4 w-8 text-center"
                required
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}  onKeyDown={(e) => {
                  if (e.key === "Backspace" && value === "") {
                    handleOtpChange(index, "", true);
                  }
                }}
                ref={inputRefs.current[index]}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={verifyOtp}
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-xl md:w-[40%] w-[100%] my-4 md:my-0"
          >
            Verify
          </button>

          <div className="py-4 my-2">
            Not received your code?{" "}
            <span className="font-bold text-blue-500">Resend code</span>
          </div>
        </form>
      </div>
    
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
