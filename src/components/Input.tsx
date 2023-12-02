import React from "react";

const Input = ({ handleChange, value, type, label, placeHolder }) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-2"> {label} </label>}
      <input
        min={0}
        onChange={handleChange}
        type={type}
        required
        placeholder={placeHolder}
        className="w-[20%] pl-2 border rounded-md"
        value={value}
      />
    </div>
  );
};

export default Input;
