import { useState } from "react";
import "./App.css";
import Abouts from "./components/Abouts";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [toggleText, setToggleText] = useState("Dark Mode Disabled");
  const [alert, setAlert] = useState(null);
  const [previewText, setPreviewText] = useState("");

  const setAlertWithType = (message, type, timeout) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, timeout);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setToggleText("Dark Mode Enabled");
      document.title = "TextUtils-Home(Dark-Mode)";
      document.body.style.backgroundColor = "#2b3641";
      setAlertWithType("Dark mode enabled", "success", 1500);
    } else {
      setMode("light");
      setToggleText("Dark Mode Disabled");
      document.title = "TextUtils-Home";
      document.body.style.backgroundColor = "white";
      setAlertWithType("Light mode enabled", "success", 1500);
    }
  };

  const searchPreviewText = (text1) => {
    setPreviewText(text1);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          imagePath="codex.png"
          mode={mode}
          alert={setAlertWithType}
          previewText={previewText}
          toggleText={toggleText}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route exact path="/about" element={<Abouts mode={mode} alert={setAlertWithType}/>} />
            <Route
             exact path="/"
              element={
                <div className="container">
                  <TextForm
                    title="Text Converter"
                    mode={mode}
                    toggleText={toggleText}
                    toggleMode={toggleMode}
                    alert={setAlertWithType}
                    preview={searchPreviewText}
                  
                  />
                </div>
              }
            />
          </Routes>
        </div>
        <div className={`container col-xs-12 space`}></div>
        <div className="sticky-bottom">
          <Footer mode={mode} />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
