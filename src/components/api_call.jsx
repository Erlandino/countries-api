import { useEffect, useState } from "react";

export default function Api_call() {
  const [countries, setCountries] = useState();

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

  return (
    <div>
      {countries &&
        countries.map((countryData) => {
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
  );
}
