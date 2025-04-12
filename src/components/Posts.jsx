import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Posts({darkMode}){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("public/posts.json") // Adjust path as needed
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to load posts:", err));
  }, []);

  return(
    <Row id="postsContainer" className="mt-4">
      {posts.map((post, index) => (
        <Col md={4} key={index} className="d-flex align-items-stretch mb-4">
          <Card
            className={`flex-column ${darkMode ? "card-dark" : "card-light"}`}
            style={{
              width: "100%",
              transform: "scale(1)",
            }}
          >
            <Card.Img
              variant="top"
              src={post.image}
              alt={post.title}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.description}</Card.Text>
              <Button variant="primary" href={post.link} target="_blank">
                See Post
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Posts;
