// imports
import "./App.css";
import { useEffect, useState } from "react";
import Details from "./components/Details";
import Countries from "./components/Countries";
import Header from "./components/Header";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { countriesApiCall } from "./components/api";

export default function App() {
  // useStates
  const [countriesData, setCountriesData] = useState([""]);

  // UseEffect for api call, to prevent infinite api due to setCountries in apiCall function
  useEffect(() => {
    const fetchData = async () => {
      const data = await countriesApiCall();
      setCountriesData(data);
    };
    fetchData();
  }, []);

  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" exact Component={() => <Countries countriesData={countriesData} />} />
        <Route path="/:countryCode" Component={() => <Details countries={countriesData} />} />
      </Routes>
    </main>
  );
}
