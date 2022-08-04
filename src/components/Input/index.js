import React from "react";

export default function Input(props) {
  const onChange = (event) => {
    // console.log(event);
    if (props.onChange) props.onChange(event.target.value);
  };
  return (
    <input
      type="text"
      className="form-control"
      placeholder="input activity"
      onChange={onChange}
    />
  );
}
