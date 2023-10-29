import React, { useState } from "react";
import currentrole from "../../asserts/Currentrole";
import { useNavigate } from "react-router-dom";

export default function Profile7({ formdetails }) {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const saveRoleAndContinue = () => {
    if (selectedRole) {
      formdetails.currentRole = selectedRole;
      console.log(formdetails);
      window.scroll(0, 0);
      navigate("/profile/page8");
    }
  };

  return (
    <div>
      <div className="h-1 w-full flex">
        <div className="h-full bg-blue-900 w-[80%]"></div>
        <div className="h-full bg-white w-[20%]"></div>
      </div>
      <div className="m-4 relative">
        <div className="py-3 text-2xl font-bold font-sans">
          What's your current role?
        </div>
        {currentrole.map((item, key) => (
          <div key={key} className="py-1 px-3">
            <input
              type="radio"
              name="role"
              id={item}
              value={item}
              checked={selectedRole === item}
              onChange={handleRoleChange}
            />
            <label htmlFor={item} onClick={() => setSelectedRole(item)}>
              {item}
            </label>
          </div>
        ))}
        <br />
        <div className="flex flex-row-reverse ">
          <button
            onClick={saveRoleAndContinue}
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-xl md:w-[40%] w-[100%] my-4 md:my-0"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
