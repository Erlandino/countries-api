import React from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import countryData from "country-data";
export default function Details({ countriesData }) {
  // Uses params to get countrycode from url
  const { countryCode } = useParams();

  // Uses countrycode to find api data of the country with the country code
  const countryDetails = countriesData.find((filterData) => filterData.cca2 === countryCode);

  // The api contains alot of data that should of been in arrays but are in objects.
  // Therefore we need a special way to loop trough the objects like we do in arrays.
  // Thats what the objectSorter is for, give it a path in an array trough function arguments.
  const objectSorter = (endpoint) => {
    // If data from api is available
    if (countryDetails && endpoint) {
      // Adds api data of country to currentPath
      let currentPath = countryDetails;
      // Sorts trough data from endpoint parameter and uses it to create a path to data
      endpoint.forEach((currentItem) => {
        // If the currentItem is an property of currentPath
        if (currentItem in currentPath) {
          // Changes content of currentPath to be the object gained from
          // Using the path in the if statement above in the code below
          currentPath = currentPath[currentItem];
        } else {
          // This shouldn't happen but just in case
          currentPath = undefined;
        }
      });

      // Constant to allow us to push values in array
      const endPointItems = [];

      // Lastly puts all the the property values from the new currentPath in an array
      for (const currentProperty in currentPath) {
        // If the currentProperty is in currentPath
        if (currentProperty in currentPath) {
          // Pushed the value of currentProperty in currentPath into the array of endPointItems
          endPointItems.push(currentPath[currentProperty]);
        }
      }
      // Sends the new sorted array of property values back to the caller
      return endPointItems;
    }
  };

  // if data from api has not arrived yet
  if (!countryDetails) {
    return <div>Country not found.</div>;
  }

  // jsx
  return (
    <section className="details">
      <div className="go-back-button-container">
        <HashLink className="go-back-button-container_button" to="/">
          Go back
        </HashLink>
      </div>
      <div className="countryDetails-container">
        <img src={countryDetails.flags.png} alt="" />
        <div className="countryDetails-container_description">
          <h1 className="countryDetails-container_description_title">
            {countryDetails.name.common}
          </h1>
          <div className="countryDetails-container_description_info">
            <div>
              <strong>Native Names:</strong>{" "}
              <ul>
                {objectSorter(["name", "nativeName"]).map((nativeName) => {
                  return <li>{nativeName.common}</li>;
                })}
              </ul>
            </div>
            <p>
              <strong>Population:</strong> {countryDetails.population}
            </p>
            <p>
              <strong>Region:</strong> {countryDetails.region}
            </p>
            <p>
              <strong>Sub Region:</strong> {countryDetails.subregion}
            </p>
            <p>
              <strong>Capital:</strong> {countryDetails.capital[0]}
            </p>
            <p>
              <strong>Top Level Domain:</strong> {countryDetails.tld[0]}
            </p>
            <div>
              <strong>Currencies:</strong>{" "}
              <ul>
                {objectSorter(["currencies"]).map((currency) => {
                  return <li>{currency.name}</li>;
                })}
              </ul>
            </div>
            <div>
              <strong>Languages:</strong>{" "}
              <ul>
                {objectSorter(["languages"]).map((language) => {
                  return <li>{language}</li>;
                })}
              </ul>
            </div>
          </div>
          <div>
            <strong>Border Countries:</strong>{" "}
            {countryDetails.borders ? (
              <ul>
                {countryDetails.borders?.map((borderCountry) => {
                  return <li>{countryData.countries[borderCountry].name}</li>;
                })}
              </ul>
            ) : (
              <p>None</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
