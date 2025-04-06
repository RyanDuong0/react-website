import Avatar from "@mui/material/Avatar";
import Col from 'react-bootstrap/Col';

function HomeContent() {
  return (
    <Col md={3} className="m-0">
      <Avatar
        alt="Profile Picture"
        src="../../img/profilepicture.jpg"
        sx={{ width: 185, height: 175 }}
      />
    </Col>
  );
}

export default HomeContent;
