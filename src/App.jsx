// imports
import "./App.css";
import { useEffect, useState } from "react";
import Details from "./components/Details";
import Countries from "./components/Countries";
import Header from "./components/Header";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { countriesApiCall } from "./components/api";

// elemnts to dispplay, header will always be ontop of the elements within outlet.
function Dashboard({ toggleBackgroundColor, isBlack }) {
  return (
    <div className="app_container">
      <Header toggleBackgroundColor={(toggleBackgroundColor, isBlack)} />
      <Outlet />
    </div>
  );
}

// Outer component of project
export default function App() {
  // useStates
  const [countriesData, setCountriesData] = useState();
  const [isBlack, setIsBlack] = useState(false);

  function toggleBackgroundColor() {
    setIsBlack((prevState) => !prevState);
  }

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
        <Route
          path="/"
          element={<Dashboard toggleBackgroundColor={toggleBackgroundColor} isBlack={isBlack} />}
        >
          <Route
            path="/"
            exact
            Component={() => <Countries countriesData={countriesData} isBlack={isBlack} />}
          />
          <Route
            path="/:countryCode"
            Component={() => <Details countriesData={countriesData} isBlack={isBlack} />}
          />
        </Route>
      </Routes>
    </main>
  );
}
