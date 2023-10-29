import React, { useState } from "react";
import skills from "../../asserts/Skills";
import { GrAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { ImBin } from "react-icons/im";

export default function Profile6({ formdetails }) {
  const navigate = useNavigate();
  const submitbut = () => {
    navigate("/profile/page7");
    formdetails.skills = skil;
    console.log(formdetails);
    window.scroll(0, 0);
  };
  const [iniskills, setiniskills] = useState(skills);
  const [skil, setskills] = useState([]);
  const [newSkill, setNewSkill] = useState(""); // Track the new skill being typed

  const addlist = (value) => {
    if (!skil.includes(value)) setskills([...skil, value]);
    setiniskills(iniskills.filter((ite) => ite !== value));
  };

  const delitem = (itemToDelete) => {
    const updatedSkills = skil.filter((item) => item !== itemToDelete);
    setskills(updatedSkills);
    setiniskills([...iniskills, itemToDelete]);
  };

  const handleNewSkillChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddNewSkill = () => {
    if (newSkill.trim() !== "" && !skil.includes(newSkill)) {
      setskills([...skil, newSkill]);
      setNewSkill(""); // Clear the input field
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddNewSkill();
  };

  return (
    <div>
      <div className="h-1 w-full flex">
        <div className="h-full bg-blue-900 w-[60%]"></div>
        <div className="h-full bg-white w-[40%]"></div>
      </div>
      <div className="m-4 relative p-2">
        <div className="py-3 text-2xl font-bold font-sans">
          What are some of your skills?
        </div>
        <div className="text-sm">We recommend at least 4 skills</div>
        <br />
        <div className="w-full h-[40vh] border-2 rounded-2xl  overflow-y-auto">
          <ul className="flex flex-wrap p-4">
            {skil.map((item, key) => (
              <li
                className="hover:bg-blue-900 duration-300 hover:scale-110 hover:text-white m-4  cursor-pointer border-2 border-blue-900 p-2 rounded-xl flex justify-center items-center gap-1"
                key={key}
                onClick={() => delitem(item)}
              >
                <ImBin />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <br />
        <hr />
        <br />
        <div className="w-full justify-center flex items-center gap-2">
          <form onSubmit={handleFormSubmit} >
            <input
              type="text"
              className="p-2 border-b-2 rounded-md mx-3"
              placeholder="Type a new skill"
              value={newSkill}
              onChange={handleNewSkillChange}
            />
            <button
              className="hover:bg-blue-900 duration-300 hover:scale-110 hover:text-white font-bold py-2 px-4 rounded-xl"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
          <br />
        <ul className="w-full flex flex-wrap gap-2">
          {iniskills.map((item, key) => (
            <li
              onClick={() => addlist(item)}
              className="hover:bg-blue-900 duration-300 hover:scale-110 hover:text-white cursor-pointer p-2 rounded-xl flex justify-center items-center gap-2 m-2"
              key={key}
            >
              <GrAdd color="#6e5aea" />
              {item}
            </li>
          ))}
        </ul>
        <br />
        <div className="flex flex-row-reverse">
          <button
            className="bg-blue-800 hover:bg-blue-900 duration-300 text-white font-bold py-2 px-4 rounded-xl"
            onClick={submitbut}
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}