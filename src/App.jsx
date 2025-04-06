import './App.css'
import NavbarTop from './components/NavbarTop.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeContent from './components/HomeContent.jsx';
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <>
      <NavbarTop />
      <Container className="mt-5">
        <HomeContent />
      </Container>
    </>
  )
}

export default App
