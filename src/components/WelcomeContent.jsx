import Avatar from "@mui/material/Avatar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function WelcomeContent() {
  return (
    <Container className="mt-5">
      {/*Row for Profile Picture */}
      <Row className="align-items-center mx-0">
        <Col md={3} className="ps-0 text-start">
          <Avatar
            alt="Profile Picture"
            src="../img/profilepicture.jpg"
            sx={{ width: 185, height: 175, pointerEvents: "none" }}
          />
        </Col>

        {/* Welcome Message */}
        <Col md={9} className="text-start">
          <h1 className="display-6" style={{ fontSize: "2.5rem"}}>
            Welcome to Ryan Duong's Website
          </h1>
          <h3 className="display-6" style={{ fontSize: "1.5rem"}}>
            Aspiring Software Engineer from the UK
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default WelcomeContent;
