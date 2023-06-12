"use client";
import React from "react";

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick} key={props.key}>
      {props.children}
    </button>
  );
};

export default Button;
