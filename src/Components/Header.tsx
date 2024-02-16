import React, { useState } from "react";
import Style from "./Style";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Style darkMode={darkMode} />
      <header className={`header ${darkMode ? "dark" : "light"}`}>
        <div>
          <h1 className="title">Where in the world?</h1>
        </div>

        <div>
          <span className="toggle-mode" onClick={toggleDarkMode}>
            {darkMode ? "Light mode" : "Dark mode"}
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
