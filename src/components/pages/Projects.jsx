import NavbarTop from "../NavbarTop.jsx";
import ThemeButton from "../ThemeButton.jsx";

function Projects({darkMode, toggleDarkMode}){
  return(
          <NavbarTop darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <ThemeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
  );
}

export default Projects;
