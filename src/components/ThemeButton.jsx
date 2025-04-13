import Button from "react-bootstrap/Button";
import "../App.css";

function ThemeButton({darkMode, toggleDarkMode}){
  return(
    <Button
      onClick={toggleDarkMode}
      variant={darkMode ? "dark" : "light"}
      className="floating-button"
      style={{ transition: "opacity 250ms ease-in-out, transform 250ms ease-in-out" }}
    >
      <i
        className={darkMode ? "bi bi-moon-fill" : "bi bi-brightness-high-fill"}
        style={{
          transition: "opacity 250ms ease-in-out, transform 600ms ease-in-out",
          transform: darkMode ? "rotate(0deg)" : "rotate(180deg)",
          opacity: darkMode ? 1 : 0.8,
        }}
      ></i>
    </Button>

  );
}

export default ThemeButton;
