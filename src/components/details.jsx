import React from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import countryData from "country-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft as faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
      {/* Go back button */}
      <div className="go-back-button-container">
        <HashLink className="go-back-button-container_button" to="/">
          <FontAwesomeIcon className="go-back-button-container_button_icon" icon={faArrowLeft} />
          Back
        </HashLink>
      </div>
      <div className="countryDetails-container">
        {/* Flag */}
        <img className="countryDetails-container_flag" src={countryDetails.flags.png} alt="" />
        <div className="countryDetails-container_description">
          {/* Country name */}
          <h1 className="countryDetails-container_description_title">
            {countryDetails.name.common}
          </h1>
          <div className="countryDetails-container_description_info">
            {/* Native name */}
            <div className="countryDetails-container_description_info_nativeNames">
              <strong>Native Names:</strong>{" "}
              <ul>
                {/* Calls objectsorter with path to nativenames then maps to and create elements for each name */}
                {objectSorter(["name", "nativeName"]).map((nativeName) => {
                  return <li>{nativeName.common}</li>;
                })}
              </ul>
            </div>
            {/* Population */}
            <p className="countryDetails-container_description_info_population">
              <strong>Population:</strong> {countryDetails.population}
            </p>
            {/* Region */}
            <p className="countryDetails-container_description_info_region">
              <strong>Region:</strong> {countryDetails.region}
            </p>
            {/* Sub Region */}
            <p className="countryDetails-container_description_info_subRegion">
              <strong>Sub Region:</strong> {countryDetails.subregion}
            </p>
            {/* Capital */}
            <p className="countryDetails-container_description_info_capital">
              <strong>Capital:</strong> {countryDetails.capital[0]}
            </p>
            {/* Top Level Domain */}
            <p className="countryDetails-container_description_info_tld">
              <strong>Top Level Domain:</strong> {countryDetails.tld[0]}
            </p>
            {/* Currencies */}
            <div className="countryDetails-container_description_info_currencies">
              <strong>Currencies:</strong>{" "}
              <ul>
                {/* Calls objectsorter with path to currencies then maps to and create elements for each currency */}
                {objectSorter(["currencies"]).map((currency) => {
                  return <li>{currency.name}</li>;
                })}
              </ul>
            </div>
            {/* Languages */}
            <div className="countryDetails-container_description_info_languages">
              <strong>Languages:</strong>{" "}
              <ul>
                {/* Calls objectsorter with path to languages then maps to and create elements for each language */}
                {objectSorter(["languages"]).map((language) => {
                  return <li>{language}</li>;
                })}
              </ul>
            </div>
          </div>
          {/* Border Countries */}
          <div className="countryDetails-container_description_info_borders">
            <strong>Border Countries:</strong>
            {/* Checks if country has borders */}
            {countryDetails.borders ? (
              <ul className="countryDetails-container_description_info_borders_list">
                {/* Maps trough borders array in countrydetails and creates a new element for each border 
                and creates a full country name trough countrydata package using the 3 letter countrycode from borders array item*/}
                {countryDetails.borders?.map((borderCountry) => {
                  return <li>{countryData.countries[borderCountry].name}</li>;
                })}
              </ul>
            ) : (
              // If country has no borders
              <p>None</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
