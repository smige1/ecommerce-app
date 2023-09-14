import React from "react";

const CustomInput = (props) => {
  const { type, placeholder, i_id, className, name, value, onChange, onBlur } = props;
  return (
    <div className="form-floating mt-3">
      <input
        type={type}
        className={`form-control ${className}`}
        id={i_id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={placeholder}>{placeholder}</label>
    </div>
  );
};

export default CustomInput;
