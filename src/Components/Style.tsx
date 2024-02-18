import React from "react";

interface StyleProps {
  darkMode: boolean;
}

const Style: React.FC<StyleProps> = ({ darkMode }) => {
  return (
    <style>{`
      body {
        background-color: ${darkMode ? "#0a1011" : "#fff"};
        color: ${darkMode ? "#fff" : "#000"};
        transition: background-color 0.7s, color 0.7s;
      }

      input {
        background-color: ${darkMode ? "rgba(15, 21, 26, 0.9)" : "lightgray"};
        color: ${darkMode ? "#fff" : "#000"};
        caret-color: ${darkMode ? "#fff" : "#000"};
      }

      input::placeholder {
        color: ${darkMode ? "#fff" : "#000"};
      }

      select {
        color: ${darkMode ? "#fff" : "#000"};
        background-color: ${darkMode ? "rgba(15, 21, 26, 0.9)" : "lightgray"}
      }

      select option {
        color: ${darkMode ? "#fff" : "#000"};
        background-color: ${darkMode ? "rgba(15, 21, 26, 0.9)" : "lightgray"}
      }

      .piece {
        color: ${darkMode ? "#fff" : "#000"};
        background-color: ${darkMode ? "rgba(15, 21, 26, 0.9)" : "lightgray"}
      }

      .toggle-mode {
        cursor: pointer;
        color: ${darkMode ? "#fff" : "#000"};
        background-color: ${darkMode ? "rgba(15, 21, 26, 0.9)" : "lightgray"}
      }

      .title{
        color: ${darkMode ? "#fff" : "#000"};
        background-color: ${darkMode ? "rgba(15, 21, 26, 0.9)" : "lightgray"}
      }

      .pagination {
        list-style: none;
        display: flex;
        gap: 4px;
        justify-content: center;
        margin-top: 20px;
      }

      .number {
        padding: 8px 12px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
        background-color: ${darkMode ? "#222" : "#fff"};
        color: ${darkMode ? "#fff" : "#000"};
        border: 1px solid ${darkMode ? "#444" : "#000"};
        border-radius: 4px;
        font-size: 14px;
      }

      .number:hover {
        background-color: ${darkMode ? "#fff" : "#000"};
        color: ${darkMode ? "#000" : "#fff"};

      }

      .active .number {
        background-color: ${darkMode ? "#000" : "#fff"};
        color: ${darkMode ? "#fff" : "#000"};

      }

    `}</style>
  );
};

export default Style;
