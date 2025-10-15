import React from "react";

const InputField = ({  name, type = "text", register, errors, placeholder }) => (
  <div className="input-group">
    <input
      type={type}
      id={name}
      {...register(name)}
      placeholder={placeholder}
      className={`input-field ${errors[name] ? "input-error" : ""}`}
    />
    {errors[name] && (
      <p className="error-message">{errors[name].message}</p>
    )}
  </div>
);

export default InputField;
