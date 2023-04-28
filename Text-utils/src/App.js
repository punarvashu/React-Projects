import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Activated", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About mode={mode} toggleMode={toggleMode} />}
            ></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter The Text To Analyse"
                  mode={mode}
                ></TextForm>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
