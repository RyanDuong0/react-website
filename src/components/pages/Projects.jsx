import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import TimelineStructure from "../TimelineStructure.jsx";
import "react-under-construction/build/css/index.css";

function Projects({ darkMode }) {
    return (
        <>
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <Container className="mt-5">
                    {/* <TimelineStructure darkMode={darkMode} /> */}
                    <div className={darkMode ? "dark-mode" : "light-mode"}>
                        <div style={{ paddingTop: 300 }}>
                            <h1 style={{ fontFamily: "Quicksand, sans-serif" }}>:(</h1>
                            <h1 style={{ fontFamily: "Quicksand, sans-serif" }}>
                                This webpage is under construction
                            </h1>
                        </div>
                    </div>     
                </Container>
            </div>
        </>
    );
}

export default Projects;
