import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function HomeContent(){
    return(
        //Container for Posts
        <Container className="mt-5">
            <Row className="align-items-center">
                <Col md={3}>
                    <h1 className="text-start display-6" style={{fontSize:"1.3rem"}}>
                        Latest Posts
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeContent;