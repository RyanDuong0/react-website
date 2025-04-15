import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Posts({darkMode}){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to load posts:", err));
  }, []);

  return(
    <>
      <h1 className="text-start display-6" style={{ fontSize: "1.3rem"}}>
        Latest Posts
      </h1>
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
                <Card.Title
                  style={{fontFamily:"Quicksand, sans-serif", fontWeight:1000}}
                >{post.title}</Card.Title>
                <Card.Text
                  style={{fontFamily:"Quicksand, sans-serif"}}
                >{post.description}</Card.Text>
                <Button variant="primary" href={post.link} target="_blank" style={{fontFamily:"Quicksand, sans-serif"}}>
                  See Post
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Posts;
