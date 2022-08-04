import React from "react";
import Input from "../Input";

export default function Button(props) {
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  return (
    <div className="div">
      <button className="btn btn-info mt-2" onClick={onClick}>
        {props.children}
      </button>
    </div>
  );
}
