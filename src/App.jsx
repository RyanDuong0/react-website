import "./App.css";
import NavbarTop from "./components/NavbarTop.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import WelcomeContent from "./components/WelcomeContent.jsx";
import HomeContent from "./components/HomeContent.jsx";
import Posts from "./components/Posts.jsx";
import {useState,useEffect} from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false); //light mode initially

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
        <Button onClick={toggleDarkMode} variant={darkMode ? "dark" : "light"} className="floating-button">
          <i className={darkMode ? "bi bi-moon-fill" : "bi bi-brightness-high-fill"}></i>
        </Button>
      </div>
    </>
  );
}

export default App;
