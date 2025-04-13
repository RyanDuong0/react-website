import NavbarTop from "../NavbarTop.jsx";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import WelcomeContent from "../WelcomeContent.jsx";
import HomeContent from "../HomeContent.jsx";
import Posts from "../Posts.jsx";
import ThemeButton from "../ThemeButton.jsx";

function Home({ darkMode, toggleDarkMode }) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <NavbarTop darkMode={darkMode} />
      <Container className="mt-5">
        <WelcomeContent />
      </Container>
      <HomeContent />
      <Posts darkMode={darkMode} />
      <ThemeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
}

export default Home;
