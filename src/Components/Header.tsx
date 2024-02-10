import React, { useState } from "react";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header className={`header ${darkMode ? "dark" : "light"}`}>
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div>
          <span className="toggle-mode" onClick={toggleDarkMode}>
            {darkMode ? "Light mode" : "Dark mode"}
          </span>
        </div>
      </header>

      <style>{`
        body {
          background-color: ${darkMode ? "#2b3945" : "#fff"};
          color: ${darkMode ? "#fff" : "#000"};
        }

        input {
          background-color: ${darkMode ? "#2b3945" : "#fff"};
          color: ${darkMode ? "#fff" : "#000"};
          caret-color: ${darkMode ? "#fff" : "#000"};
        }

        input::placeholder {
          color: ${darkMode ? "#fff" : "#000"};
        }

        select {
          background-color: ${darkMode ? "#2b3945" : "#fff"};
          color: ${darkMode ? "#fff" : "#000"};
        }

        select option {
          background-color: ${darkMode ? "#2b3945" : "#fff"};
          color: ${darkMode ? "#fff" : "#000"};
        }

        .piece {
          background-color: ${darkMode ? "#2b3743" : "lightgray"};
          color: ${darkMode ? "#fff" : "#000"};
        }

        .toggle-mode {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Header;
