// imports
import "./App.css";
import { useEffect, useState } from "react";
import Details from "./components/Details";
import Countries from "./components/Countries";
import Header from "./components/Header";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { countriesApiCall } from "./components/api";

function Dashboard() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

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
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" exact Component={() => <Countries countriesData={countriesData} />} />
          <Route path="/:countryCode" Component={() => <Details countriesData={countriesData} />} />
        </Route>
      </Routes>
    </main>
  );
}
