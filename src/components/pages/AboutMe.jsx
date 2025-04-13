import NavbarTop from "../NavbarTop.jsx";
import Container from "react-bootstrap/Container";
import ThemeButton from "../ThemeButton.jsx";

function AboutMe({darkMode, toggleDarkMode}){
  return(
    <>
      <NavbarTop darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <ThemeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </>
  );
}

export default AboutMe;
