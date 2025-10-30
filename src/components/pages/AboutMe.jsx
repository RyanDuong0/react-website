import React from "react";
import WelcomeContent from "../WelcomeContent.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutMe({ darkMode, toggleDarkMode }) {
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
              I am currently a student at{" "}
              <strong> Newcastle University </strong>
              working towards a <strong>BSc in Computer Science</strong> and I
              am actively seeking internships and work experience to help refine
              my skills and to gain new skills that are vital to Software
              Engineering. During my four years of experience, I have picked up
              languages such as <strong>C#, Python, Java and SQL</strong> and
              have even completed a project using C# and SQL recently, which
              deepened my understanding of software development methodologies.
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
              <strong> Treasurer of NUCATS </strong> <br />
              <ul>
                <li>
                  Current Treasurer of <strong>NUCATS</strong> (Newcastle
                  University Computing And Technology Society)
                </li>
              </ul>
            </p>
            <p
              className={darkMode ? "dark-mode" : "light-mode"}
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontStyle: "normal",
                fontWeight: 500,
              }}
            >
              <strong> IEUK 2025: Technology & Engineering Intern </strong>{" "}
              <br />
              <ul>
                <li>
                  Selected to participate in the <strong>IEUK 2025 Internship programme</strong>,
                  focused on technology and engineering, gaining exclusive
                  insights and practical experience with leading industry
                  professionals.
                </li>
                <li>
                  Attended exclusive insight sessions and networking events with
                  companies including Lloyd's, Google, and GCHQ.
                </li>
                <li>
                  Developed a <strong>6-month product roadmap</strong> for a startup fitness app,
                  aligning with market trends and user needs.
                </li>
                <li>
                  Conducted <strong>in-depth market research</strong> on competitive fitness
                  platforms, industry trends, and user behaviour.
                </li>
                <li>
                  Designed strategies to <strong>boost user retention</strong> from <strong>35% to 60%</strong>
                  through feature enhancements and responding to user feedback.
                </li>
                <li>
                  Delivered a final presentation to peers, receiving
                  constructive feedback.
                </li>
              </ul>
            </p>

            <p
              className={darkMode ? "dark-mode" : "light-mode"}
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontStyle: "normal",
                fontWeight: 500,
              }}
            >
              <strong> SAgE Student Ambassador </strong> <br />
              <ul>
                <li>
                  Represented the school of computing at university events,{" "}
                  <strong>
                    supporting outreach, recruitment, and engagement activities
                  </strong>{" "}
                  to promote STEM disciplines to prospect ive students.
                </li>
                <li>
                  Collaborated with academic staff and peers to deliver{" "}
                  <strong>campus tours</strong>, enhancing communication and
                  public speaking skills while fostering a welcoming university
                  environment.
                </li>
              </ul>
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
              <strong> AIG - Shields Up: Cybersecurity Job Simulation </strong>
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
                Completed a cybersecurity threat analysis simulation for the{" "}
                <strong>Cyber Defense Unit</strong>, staying updated on{" "}
                <strong>CISA</strong> publications.
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
                Utilized <strong>Python</strong> skills to write a script for{" "}
                <strong>ethical hacking</strong>, avoiding ransom payments by
                bruteforcing decryption keys.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutMe;
