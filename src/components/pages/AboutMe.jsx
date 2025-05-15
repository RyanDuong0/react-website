import React from "react";
import WelcomeContent from "../WelcomeContent.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutMe({ darkMode }) {
    return (
        <>
            <WelcomeContent />
            <Container className="mt-5">
                <Row className="align-items-start">
                    {/* "About Me" (Left Side) */}
                    <Col md={3}>
                        <h1
                            className={
                                'text-start display-6 ${darkMode ? "dark-mode" : "light-mode"}'
                            }
                            style={{
                                fontSize: "1.3rem",
                            }}
                        >
                            About Me
                        </h1>
                    </Col>
                    {/* Paragraph (Right Side) */}
                    <Col md={7}>
                        <p
                            className={darkMode ? "dark-mode" : "light-mode"}
                            style={{
                                fontFamily: "Quicksand, sans-serif",
                                fontStyle: "normal",
                                fontWeight: 500,
                            }}
                        >
                            I am currently a student at Newcastle University working towards a
                            BSc in Computer Science and I am actively seeking internships and
                            work experience to help refine my skills and to gain new skills
                            that are vital to Software Engineering. During my four years of
                            experience, I have picked up languages such as C#, Python, Java
                            and SQL and have even completed a project using C# and SQL
                            recently, which deepened my understanding of software development
                            methodologies.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row className="align-items-start">
                    {/* "About Me" (Left Side) */}
                    <Col md={3}>
                        <h1
                            className={
                                'text-start display-6 ${darkMode ? "dark-mode" : "light-mode"}'
                            }
                            style={{
                                fontSize: "1.3rem",
                            }}
                        >
                            Experience
                        </h1>
                    </Col>
                    {/* Paragraph (Right Side) */}
                    <Col md={7}>
                        <p
                            className={darkMode ? "dark-mode" : "light-mode"}
                            style={{
                                fontFamily: "Quicksand, sans-serif",
                                fontStyle: "normal",
                                fontWeight: 500,
                            }}
                        >
                            SAgE Student Ambassador <br /> Current student ambassador for the
                            School of Computing.SAgE Student Ambassador <br /> Current student
                            ambassador for the School of Computing.
                        </p>
                        <p
                            className={darkMode ? "dark-mode" : "light-mode"}
                            style={{
                                fontFamily: "Quicksand, sans-serif",
                                fontStyle: "normal",
                                fontWeight: 500,
                            }}
                        >
                            Virtual Work Experience Day Pathway CTM <br /> Tech, Digital and
                            IT virtual work experience day where I engaged with companies
                            including: Sky, Sage, GCHQ and Microsoft.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row className="align-items-start">
                    {/* "About Me" (Left Side) */}
                    <Col md={3}>
                        <h1
                            className={
                                'text-start display-6 ${darkMode ? "dark-mode" : "light-mode"}'
                            }
                            style={{
                                fontSize: "1.3rem",
                            }}
                        >
                            Certifications
                        </h1>
                    </Col>
                    {/* Paragraph (Right Side) */}
                    <Col md={7}>
                        <p
                            className={darkMode ? "dark-mode" : "light-mode"}
                            style={{
                                fontFamily: "Quicksand, sans-serif",
                                fontStyle: "normal",
                                fontWeight: 500,
                            }}
                        >
                            AIG - Shields Up: Cybersecurity Job Simulation
                        </p>
                        <ul
                            className={darkMode ? "dark-mode" : "light-mode"}
                            style={{
                                fontFamily: "Quicksand, sans-serif",
                                fontStyle: "normal",
                                fontWeight: 500,
                            }}
                        >
                            <li>
                                Completed a cybersecurity threat analysis simulation for the
                                Cyber Defense Unit, staying updated on CISA publications.
                            </li>
                            <li>
                                Researched and understood reported vulnerabilities, showcasing
                                analytical skills in cybersecurity.
                            </li>
                            <li>
                                Drafted a clear and concise email to guide teams on
                                vulnerability remediation.
                            </li>
                            <li>
                                Utilized Python skills to write a script for ethical hacking,
                                avoiding ransom payments by bruteforcing decryption keys.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AboutMe;
