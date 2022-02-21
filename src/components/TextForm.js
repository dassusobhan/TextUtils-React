import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.preview(newText);
   if(text===''){
    props.alert(
      "Textbox is blank!!! Please enter something in the textbox below before click",
      "danger",
      2000
    );
   }
   else{
    props.alert("Converted to Uppercase", "success", 2000);
   }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
   props.preview(event.target.value);
  };
  const handleResetClick = () => {
    setText("");
    props.preview("");
    props.alert("Textbox has been reset", "success", 1000);
  };

  const handleInitCapClick = () => {
    let text1 = text.toLowerCase();
    let sl = text1.split(RegExp("[.]+"));
    let newText = "";

    sl.forEach((str) => {
      str = str.trim();
      newText = newText + str.charAt(0).toUpperCase() + str.slice(1);
      if (newText !== "" && newText.charAt(newText.length - 2) !== ".") {
        newText = newText + ". ";
      }
    });
    setText(newText.trim());
    props.preview(newText.trim());
   if(text===''){
    props.alert(
      "Textbox is blank!!! Please enter something in the textbox below before click",
      "danger",
      1500
    );
   }
   else{
    props.alert("Converted to Sentence", "success", 1500);
   }
  };

  return (
    <>
      <div
        className="hstack gap-2 d-flex justify-content-between my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.title}</h2>
      </div>
      <div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "whitesmoke" : "white",
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          {"To Uppercase"}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleInitCapClick}>
          {"To Sentence"}
        </button>
        <button className="btn btn-info mx-1" onClick={handleResetClick}>
          Reset
        </button>
      </div>
      <div
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>{text === "" ? 0 : text.trim().split(" ").length}</b> words and{" "}
          <b>{text.length}</b> charecters.
        </p>
      </div>
      <div className="my-3" style={{color: props.mode==='dark'?"white":"black"}}>
    <h2>Preview</h2>
    <p id="preview">{text.length>0?text:"Enter something in the textbox above to preview it."}</p>
  </div>
    </>
  );
}
