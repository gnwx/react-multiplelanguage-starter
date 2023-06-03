import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LanguageContext } from "react-multiplelanguage";
import { translations } from "./translations.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContext texts={translations}>
      <App />
    </LanguageContext>
  </React.StrictMode>
);
