import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from "react";
import useLocalStorage from "use-local-storage";
import NavbarTop from "./components/NavbarTop.jsx";
import React from "react";
import ThemeButton from "./components/ThemeButton.jsx";

import Home from "./components/pages/Home.jsx";
import AboutMe from "./components/pages/AboutMe.jsx";
import Projects from "./components/pages/Projects.jsx";
import {AnimatePresence} from "framer-motion";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import {motion} from "framer-motion";


// AnimatedRoutes Component
function AnimatedRoutes({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const transition = {duration: 0.7, ease:"easeInOut"};

  // Define the fade animation
  const fadeAnimation = {
    initial:{ x: 300, opacity: 0 },
    animate:{ x: 0, opacity: 1 },
    exit:{ x: -300, opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={fadeAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </motion.div>
          }
        />
        <Route
          path="/about-me"
          element={
            <motion.div
              variants={fadeAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              <AboutMe darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              variants={fadeAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              <Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

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
        <NavbarTop darkMode={darkMode} />
        <ThemeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <AnimatedRoutes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </Router>
    </>
  );
}

export default App;
