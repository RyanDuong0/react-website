import React, { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaCss3Alt, FaHtml5, FaKeyboard, FaPython } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

// Helper to blend between two hex colours
function lerpColor(a, b, t) {
    const ah = parseInt(a.replace('#', ''), 16),
    bh = parseInt(b.replace('#', ''), 16),
    ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
    br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
    rr = ar + t * (br - ar),
    rg = ag + t * (bg - ag),
    rb = ab + t * (bb - ab);
    return '#' + (((1 << 24) + (Math.round(rr) << 16) + (Math.round(rg) << 8) + Math.round(rb)).toString(16).slice(1));
}

function Timeline({ darkMode }) {
    // Animate theme transitions
    const colorValue = useMotionValue(darkMode ? 1 : 0);
    const spring = useSpring(colorValue, { stiffness: 120, damping: 20 });

    useEffect(() => {
        colorValue.set(darkMode ? 1 : 0);
    }, [darkMode, colorValue]);

    const bgLight = "#e3f0fd";
    const bgDark = "#121212";
    const textLight = "#222";
    const textDark = "#dadff7";

    const bgColor = useTransform(spring, t => lerpColor(bgLight, bgDark, t));
    const textColor = useTransform(spring, t => lerpColor(textLight, textDark, t));

    // For contentArrowStyle and lineColor (need actual colour string, not MotionValue)
    const [arrowColor, setArrowColor] = useState(darkMode ? bgDark : bgLight);
    useEffect(() => {
        const unsubscribe = bgColor.on("change", v => setArrowColor(v));
        return unsubscribe;
    }, [bgColor]);

    const lineColorMotion = useTransform(spring, t => t > 0.5 ? "white" : "black");
    const [lineColor, setLineColor] = useState(darkMode ? "white" : "black");
    useEffect(() => {
        const unsub = lineColorMotion.on("change", setLineColor);
        return unsub;
    }, [lineColorMotion]);

    const fontStyle = {
        fontFamily: "Quicksand, sans-serif",
        fontStyle: "normal",
        fontWeight: 500,
    };

    return (
        <div className="App">
            <VerticalTimeline lineColor={lineColor}>
                <VerticalTimelineElement
                    date="October 2024 - present"
                    iconStyle={{
                        background: darkMode ? "black" : "#ffffff",
                        border: darkMode ? "2px solid white" : "2px solid black",
                        transition: "0.5s",
                    }}
                    icon={
                        <motion.span
                            animate={{
                                color: darkMode ? "#ffffff" : "#0081A3",
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaReact />
                        </motion.span>
                    }
                    contentStyle={{ background: "transparent", boxShadow: "none", padding: 0 }}
                    contentArrowStyle={{
                        borderRight: `7px solid ${arrowColor}`,
                    }}
                >
                    <motion.div
                        style={{
                            backgroundColor: bgColor,
                            color: textColor,
                            borderRadius: 10,
                            padding: 20,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="vertical-timeline-element-title" style={fontStyle}>
                            <a 
                                href="https://github.com/RyanDuong0/react-website"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: darkMode ? "#a78bfa" : "#1d4ed8",
                                    cursor: 'pointer',
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                Portfolio Website
                            </a>
                        </h3>
                        <p style={fontStyle}>
                            Personal showcase of my work and skills. This portfolio website provides information about me,
                            my aspirations and projects.
                            Built with <strong>React</strong> to create a dynamic and responsive user interface. Styled using <strong>CSS</strong> Modules. Deployed via <strong>Cloudflare</strong> Pages.
                        </p>
                    </motion.div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="February 2025"
                    iconStyle={{
                        background: darkMode ? "black" : "#ffffff",
                        border: darkMode ? "2px solid white" : "2px solid black",
                        transition: "0.5s",
                    }}
                    icon={
                        <motion.span
                            animate={{
                                color: darkMode ? "#ffffff" : "#0081A3",
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <DiJavascript />
                        </motion.span>
                    }
                    contentStyle={{ background: "transparent", boxShadow: "none", padding: 0 }}
                    contentArrowStyle={{
                        borderRight: `7px solid ${arrowColor}`,
                    }}
                >
                    <motion.div
                        style={{
                            backgroundColor: bgColor,
                            color: textColor,
                            borderRadius: 10,
                            padding: 20,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="vertical-timeline-element-title" style={fontStyle}>
                            <a 
                                href="https://github.com/VOTEFORME-md/voteformeMD-KCSxNUCATS"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: darkMode ? "#a78bfa" : "#1d4ed8",
                                    cursor: 'pointer',
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                KCS X NUCATS Hackathon
                            </a>
                        </h3>
                        <p style={fontStyle}>
Engineered a responsive, <strong>web-based sales tax calculator</strong> using <strong>HTML, JavaScript, and CSV data</strong> to deliver real-time, location-specific tax calculations across all U.S. states.<br />
Worked with the team successfully in a fast-paced hackathon environment by assisting with <strong>backend logic, enhancing UI responsiveness, and integrating dynamic tax datasets</strong> to meet project goals on time.
                        </p>
                    </motion.div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="November 2024"
                    iconStyle={{
                        background: darkMode ? "black" : "#ffffff",
                        border: darkMode ? "2px solid white" : "2px solid black",
                        transition: "0.5s",
                    }}
                    icon={
                        <motion.span
                            animate={{
                                color: darkMode ? "#ffffff" : "#0081A3",
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaPython />
                        </motion.span>
                    }
                    contentStyle={{ background: "transparent", boxShadow: "none", padding: 0 }}
                    contentArrowStyle={{
                        borderRight: `7px solid ${arrowColor}`,
                    }}
                >
                    <motion.div
                        style={{
                            backgroundColor: bgColor,
                            color: textColor,
                            borderRadius: 10,
                            padding: 20,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="vertical-timeline-element-title" style={fontStyle}>
                            <a 
                                href="https://github.com/RyanDuong0/durhack-project"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: darkMode ? "#a78bfa" : "#1d4ed8",
                                    cursor: 'pointer',
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                Durhack 2024
                            </a>
                        </h3>
                        <p style={fontStyle}>
As part of a 24-hour hackathon themed <strong>"Exploration"</strong>, my team and I developed an <strong>educational game</strong> that visually represents the <strong>Solar System and provides interactive, informative content</strong> about each planet. The goal was to make learning about space engaging and accessible. We built the game using <strong>Python</strong> and <strong>Pygame</strong>, combining creativity with technical skills to deliver an immersive user experience within a tight deadline.
                        </p>
                    </motion.div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="December 2023 - May 2024"
                    iconStyle={{
                        background: darkMode ? "black" : "#ffffff",
                        border: darkMode ? "2px solid white" : "2px solid black",
                        transition: "0.5s",
                    }}
                    icon={
                        <motion.span
                            animate={{
                                color: darkMode ? "#ffffff" : "#0081A3",
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <TbBrandCSharp />
                        </motion.span>
                    }
                    contentStyle={{ background: "transparent", boxShadow: "none", padding: 0 }}
                    contentArrowStyle={{
                        borderRight: `7px solid ${arrowColor}`,
                    }}
                >
                    <motion.div
                        style={{
                            backgroundColor: bgColor,
                            color: textColor,
                            borderRadius: 10,
                            padding: 20,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="vertical-timeline-element-title" style={fontStyle}>
                            <a 
                                href="https://github.com/RyanDuong0/RevisionProgram"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: darkMode ? "#a78bfa" : "#1d4ed8",
                                    cursor: 'pointer',
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                Revision App
                            </a>
                        </h3>
                        <p style={fontStyle}>
                            Developed a Windows Forms application in <strong>C#</strong> to assist GCSE and A-Level students with efficient 
                            revision. <br />
                            Implemented a backend database using <strong>Microsoft Access</strong> and <strong>SQL</strong> for user account management 
                            and subject tracking.
                            <br />Programmed an encryption module to secure user passwords via <strong>hashing</strong> and <strong>salting</strong>, ensuring data protection. 
                            <br />Conducted user testing with students and teachers, gathering feedback for <strong>iterative improvements</strong>.
                            </p>
                    </motion.div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="July 2023 - August 2023"
                    iconStyle={{
                        background: darkMode ? "black" : "#ffffff",
                        border: darkMode ? "2px solid white" : "2px solid black",
                        transition: "0.5s",
                    }}
                    icon={
                        <motion.span
                            animate={{
                                color: darkMode ? "#ffffff" : "#0081A3",
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaKeyboard />
                        </motion.span>
                    }
                    contentStyle={{ background: "transparent", boxShadow: "none", padding: 0 }}
                    contentArrowStyle={{
                        borderRight: `7px solid ${arrowColor}`,
                    }}
                >
                    <motion.div
                        style={{
                            backgroundColor: bgColor,
                            color: textColor,
                            borderRadius: 10,
                            padding: 20,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="vertical-timeline-element-title" style={fontStyle}>
                            <a 
                                href="https://www.linkedin.com/posts/ryan-duong-97b960328_im-happy-to-share-this-can-computers-ever-activity-7245522831558545408-MTB3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFK5F28BwZ30UvRm9ztBbqi7s7EPRvi-r3o"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: darkMode ? "#a78bfa" : "#1d4ed8",
                                    cursor: 'pointer',
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                "Can Computers Ever Be Considered Sentient?"
                            </a>
                        </h3>
                        <p style={fontStyle}>
While at college, I enrolled in the <strong>Lucy Cavendish College Academic Enrichment Programme</strong>. At the end of this programme, I had the opportunity to create a research project in Artificial Intelligence. I was given the essay title <strong>"Can Computers Ever Be Considered Sentient"</strong>, from which I had to develop an argument for and against this statement, and create a conclusion that included my thoughts on the subject. Throughout this project, I researched <strong>large language models</strong> such as <strong>LaMDA</strong>, the <strong>Turing Test</strong> for computers and the requirements for sentient computing. The skills I received from this research project have been invaluable and enabled me to research a fascinating field in Computer Science.
                        </p>
                    </motion.div>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
}

export default Timeline;
