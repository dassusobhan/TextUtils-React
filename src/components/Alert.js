import React from "react";

export default function (props) {
  const initCap = (str) => {
    let newText = str.toLowerCase();
    newText = str.charAt(0).toUpperCase() + str.slice(1);
    return newText;
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} fade show text-left`}
        role="alert"
      >
        <strong>{props.alert.type==='success'?initCap(props.alert.type):initCap("error")}</strong> : {props.alert.message}
      </div>
    )
  );
}
