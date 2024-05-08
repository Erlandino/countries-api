// imports
import "./App.css";
import { useEffect, useState } from "react";
import Api_call from "./components/api_call";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonDark } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLight } from "@fortawesome/free-regular-svg-icons";

export default function App() {
  return (
    <main className="app">
      <header className="app_header">
        <h2>Where in the world</h2>
        <div className="app_header_dark-light-mode_container">
          <div className="light-mode">
            <FontAwesomeIcon icon={faMoonLight} />
            <p>Dark mode</p>
          </div>
          <div className="dark-mode">
            <FontAwesomeIcon icon={faMoonDark} />
            <p>Light mode</p>
          </div>
        </div>
      </header>
      <Api_call />
    </main>
  );
}
