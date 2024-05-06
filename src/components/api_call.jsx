// imports
import { useEffect, useState } from "react";

export default function Api_call() {
  // usestates
  const [countries, setCountries] = useState([""]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  // Async function to call for the countries api
  async function countriesApiCall() {
    try {
      // Api call
      const res = await fetch("https://restcountries.com/v3.1/all");

      // Handles the data received from api call and stores it in countries state
      const data = await res.json();
      setCountries((prevData) => data);

      // Gives error message in console when there is an error
    } catch (error) {
      console.error(`Could not retrieve weather data: ${error}`);
    }
  }

  // UseEffect for api call, to prevent infinite api due to setCountries in apiCall function
  useEffect(() => {
    countriesApiCall();
  }, []);
  console.log(countries);
  console.log(search);
  console.log(region);

  // compares countries name to input value to decide what to display
  const countriesShow = countries.filter((item) => {
    if ((search.toUpperCase() === "") & (region === "")) {
      return item;
    } else if (region !== "") {
      return (
        item.name.common.toUpperCase().includes(search.toUpperCase()) && region === item.region
      );
    } else {
      return item.name.common.toUpperCase().includes(search.toUpperCase());
    }
  });

  return (
    <div>
      <div>
        <div>
          {/* search bar for countries */}
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
          {/* Allows the user to select a region to filter the countries by */}
          <select name="" id="" onChange={(e) => setRegion(e.target.value)}>
            <option selected disabled hidden>
              Filter by region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
            <option value="">No region</option>
          </select>
        </div>
      </div>
      <div>
        {/* loops trough all countries to display and creates elements for them */}
        {countriesShow &&
          countriesShow.map((countryData) => {
            return (
              <div className="country">
                <img src={countryData.flags.svg} alt="" width="400" height="200" />
                <div>
                  <h2>{countryData.name.common}</h2>
                  <p>{countryData.population}</p>
                  <p>{countryData.region}</p>
                  <p>{countryData.capital}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
