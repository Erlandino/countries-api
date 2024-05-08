// imports
import "./App.css";
import { useEffect, useState } from "react";
import Api_call from "./components/api_call";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonDark } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLight } from "@fortawesome/free-regular-svg-icons";

export default function App() {
  return (
    <main className="App">
      <header>
        <h2>Where in the world</h2>
        <FontAwesomeIcon icon={faMoonLight} className="light-mode" />
        <FontAwesomeIcon icon={faMoonDark} className="dark-mode" />
      </header>
      <Api_call />
    </main>
  );
}
