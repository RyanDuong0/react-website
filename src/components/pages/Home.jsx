import React, { useState } from "react";
import NavbarTop from "../NavbarTop.jsx";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import WelcomeContent from "../WelcomeContent.jsx";
import HomeContent from "../HomeContent.jsx";
import Posts from "../Posts.jsx";
import ThemeButton from "../ThemeButton.jsx";

function Home({ darkMode, toggleDarkMode }) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <WelcomeContent />
      <HomeContent />
      <Posts darkMode={darkMode} />
    </div>
  );
}

export default Home;
