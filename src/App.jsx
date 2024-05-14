// imports
import "./App.css";
import { useEffect, useState } from "react";
import Api_call from "./components/Api_call";
import Header from "./components/Header";

export default function App() {
  return (
    <main className="app">
      <Header />
      <Api_call />
    </main>
  );
}
