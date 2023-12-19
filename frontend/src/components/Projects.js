import React, { useState } from "react";
import { FaRegComment, FaRegHeart, FaHeart, FaComment } from "react-icons/fa";

export default function Projects() {
  const [like, setlike] = useState(true);
  const [comment, setcomment] = useState(false);
  const setinglike = () => {
    setlike(!like);
  };
  const commentadd = () => {
    setcomment(!comment);
  }
  return (
    <div className=" p-4 m-2 ">
      <div className=" flex gap-8">
        <div className="h-[50px]  aspect-square bg-slate-400"></div>
        <div>
          <h1>Title</h1>
          <p className="text-sm">company</p>
          <p className="text-sm text-gray-600">from - to</p>
          <p className="">
            {" "}
            <b>skills:</b>
            a, b, c
          </p>
        </div>
      </div>
      <div className="w-full flex justify-around my-4 p-2">
        {like ? (
          <div
            className="flex flex-row justify-center items-center gap-2 cursor-pointer"
            onClick={setinglike}
          >
            <FaRegHeart size={20} />
            <p className=" hidden sm:flex text-lg ">Like</p>
          </div>
        ) : (
          <div
            className="flex flex-row justify-center items-center gap-2 cursor-pointer"
            onClick={setinglike}
          >
            <FaHeart size={20} color="red" />
            <p className=" hidden sm:flex text-lg ">Unlike</p>
          </div>
        )}

        <div className="flex flex-row justify-center items-center gap-2 cursor-pointer" onClick={commentadd}>
            {
                comment ? 
                
                <FaComment size={20}/>
                :
                <FaRegComment size={20} />
            }
          <p className=" hidden sm:flex text-lg">Comment</p>
        </div>
      </div>

      {
        comment && 
        <form action="" className="flex flex-col justify-center items-center gap-6">
            <textarea name="comment" id="comment" cols="20" rows="5" className="w-full border-2 border-black rounded-xl p-4 ">

            </textarea>
            <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-900 duration-300 text-white font-bold py-2 px-4 rounded-xl"
          >
            Submit
          </button>
        </form>
      }

      <hr className=" text-center w-[95%] mt-4" />
    </div>
  );
}
