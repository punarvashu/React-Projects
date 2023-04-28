import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleClClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} charcters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something In Box To Preview"}</p>
      </div>
    </>
  );
}

export default TextForm;
