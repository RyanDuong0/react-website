import NavbarTop from "../NavbarTop.jsx";
import ThemeButton from "../ThemeButton.jsx";
import WelcomeContent from "../WelcomeContent.jsx";

function Projects({darkMode, toggleDarkMode}){
  return(
    <>
      <WelcomeContent />
      <NavbarTop darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ThemeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

export default Projects;
