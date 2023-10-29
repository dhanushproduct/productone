import React from "react";

export default function ProfileDetails({ formdetails }) {
  const renderData = (data) => {
    if (typeof data === "object") {
      if (Array.isArray(data)) {
        return data.map((item, index) => (
          <div key={index} className="p-2">
            {renderData(item)}
          </div>
        ));
      } else {
        return Object.keys(data).map((key) => (
          <div key={key} className="p-2">
            <strong>{key}:</strong> {renderData(data[key])}
          </div>
        ));
      }
    } else {
      return data;
    }
  };

  return (
    <div>
     
      <div className="m-4 relative p-2 bg-white rounded-xl shadow-md">
        <div className="py-3 text-2xl font-bold font-sans">Profile Details</div>
        {renderData(formdetails)}
      </div>
    </div>
  );
}
