import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from "react";
import useLocalStorage from "use-local-storage";
import NavbarTop from "./components/NavbarTop.jsx";
import React from "react";

import Home from "./components/pages/Home.jsx";
import AboutMe from "./components/pages/AboutMe.jsx";
import Projects from "./components/pages/Projects.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage(false);
  //local storage so user preference saves for next time they use website

  const toggleDarkMode = () =>{
    setDarkMode((prevMode) => !prevMode)
  }

  useEffect(() =>{
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <>
      <Router>
        <NavbarTop darkMode={darkMode}/>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
          <Route path="/about-me" element={<AboutMe darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
          <Route path="/projects" element={<Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
