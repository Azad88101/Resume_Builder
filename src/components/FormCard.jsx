import React from "react";

const FormCard = ({ title, name, placeholder, value, onChange }) => {
  return (
<div className="mb-4">
  <label className="block text-xl text-[#fffffe] font-bold mb-2">{title}:</label>
  <input
    type="text"
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    className="w-[90%] p-2 border text-xl border-[#fff] bg-[#1E1E1E] text-[#FFFDF0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fffDF0]"
  />
</div>

  );
};

export default FormCard;