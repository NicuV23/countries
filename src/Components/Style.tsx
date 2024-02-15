import React from "react";

interface StyleProps {
  darkMode: boolean;
}

const Style: React.FC<StyleProps> = ({ darkMode }) => {
  return (
    <style>{`
      body {
        background-color: ${darkMode ? "#2b3945" : "#fff"};
        color: ${darkMode ? "#fff" : "#000"};
        transition: background-color 0.3s, color 0.3s;
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
        color: ${darkMode ? "#fff" : "#000"};
      }
    `}</style>
  );
};

export default Style;
