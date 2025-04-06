import "./App.css";
import NavbarTop from "./components/NavbarTop.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import WelcomeContent from "./components/WelcomeContent.jsx";
import HomeContent from "./components/HomeContent.jsx";
import Posts from "./components/Posts.jsx";

function App() {
  return (
    <>
      <NavbarTop />
      <Container className="mt-5">
        <WelcomeContent />
        <HomeContent />
        <Posts />
      </Container>
    </>
  );
}

export default App;
