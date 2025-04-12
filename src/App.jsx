import "./App.css";
import NavbarTop from "./components/NavbarTop.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import WelcomeContent from "./components/WelcomeContent.jsx";
import HomeContent from "./components/HomeContent.jsx";
import Posts from "./components/Posts.jsx";
import {useState,useEffect} from "react";
import useLocalStorage from "use-local-storage";

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
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <NavbarTop darkMode = {darkMode}/>
        <Container className="mt-5">
          <WelcomeContent />
        </Container>
        <HomeContent />
        <Posts darkMode={darkMode}/>
        <Button onClick={toggleDarkMode} variant={darkMode ? "dark" : "light"} className="floating-button"
          style={{transition: "opacity 250ms ease-in-out, transform 250ms ease-in-out"}}
        >
          <i
            className={darkMode ? "bi bi-moon-fill" : "bi bi-brightness-high-fill"}
            style={{
              transition: "opacity 250ms ease-in-out, transform 600ms ease-in-out",
              transform: darkMode ? "rotate(0deg)" : "rotate(180deg)",
              opacity: darkMode ? 1 : 0.8,
            }}
          ></i>
        </Button>
      </div>
    </>
  );
}

export default App;
