import React from "react";

export default function Education({ props }) {
  return (
    <div className=" p-4 m-2 ">
      <div className=" flex gap-8  justify-between w-[90%]">
        <div className="flex gap-4">
          <div className="h-[50px]  aspect-square bg-slate-400"></div>
          <div className="px-4">
            <h1 className="uppercase font-semibold">{props.item.school}</h1>
            <p className="text-sm">
              {props.item.levelofedu} {props.item.field}
            </p>
            <p className="text-sm text-gray-600">
              {props.item.fromMonth} {props.item.fromYear} -{" "}
              {props.item.toMonth} {props.item.toYear}
            </p>
            <p className="">
              {" "}
              <b>skills:</b>
              a, b, c
            </p>
          </div>
        </div>
        {props.eduedit && (
          <div className=" text-blue-500 uppercase font-semibold cursor-pointer">
            edit
          </div>
        )}
      </div>
      {/* <div className='w-full flex justify-center my-4'>

    <div className='h-[2px] bg-slate-200 w-[95%]'></div>
    </div> */}
      <hr className=" text-center w-[95%] mt-4" />
    </div>
  );
}
