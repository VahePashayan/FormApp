import React from 'react';

const Input = ({name, label, value, onChange}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        autoFocus
        id={name}
        name={name}
        type="text"
      />
    </div>
  );
};

export default Input;
