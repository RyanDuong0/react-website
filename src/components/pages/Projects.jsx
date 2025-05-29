import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Timeline from "../Timeline.jsx";

function Projects({ darkMode, toggleDarkMode }) {
    return (
        <>
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <Container className="mt-5">
                    <div className={darkMode ? "dark-mode" : "light-mode"}>
                        <Timeline darkMode={darkMode} />
                    </div>     
                </Container>
            </div>
        </>
    );
}

export default Projects;
