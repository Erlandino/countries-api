import React from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import countryData from "country-data";
export default function Details({ countriesData }) {
  const { countryCode } = useParams();

  const countryDetails = countriesData.find((filterData) => filterData.cca2 === countryCode);

  console.log(countryDetails);

  const objectSorter = (endpoint) => {
    if (countryDetails && endpoint) {
      let current = countryDetails;
      endpoint.forEach((key) => {
        if (key in current) {
          current = current[key];
        } else {
          current = undefined;
        }
      });
      const items = [];
      for (const key in current) {
        if (current.hasOwnProperty(key)) {
          items.push(current[key]);
        }
      }
      return items;
    }
  };

  if (!countryDetails) {
    return <div>Country not found.</div>;
  }

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
              {objectSorter(["currencies"]).map((currency) => {
                return (
                  <ul>
                    <li>{currency.name}</li>
                  </ul>
                );
              })}
            </div>
            <div>
              <strong>Languages:</strong>{" "}
              {objectSorter(["languages"]).map((language) => {
                return (
                  <ul>
                    <li>{language}</li>
                  </ul>
                );
              })}
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
