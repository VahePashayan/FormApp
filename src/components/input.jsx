import React from 'react';

const Input = ({name, label, value, onChange, type}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
      />
    </div>
  );
};

export default Input;
