import React from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { getName } from "country-list";

export default function Details({ countriesData }) {
  const { countryCode } = useParams();

  const countryDetails = countriesData.find((filterData) => filterData.cca2 === countryCode);

  console.log(countryCode);
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
      return current[Object.keys(current)[0]];
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
            <p>
              <strong>Native Name:</strong> {objectSorter(["name", "nativeName"]).common}
            </p>
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
            <p>
              <strong>Currencies:</strong> {objectSorter(["currencies"]).name}
            </p>
            <p>
              <strong>Languages:</strong> {objectSorter(["languages"])}
            </p>
          </div>
          <div>
            <strong>Border Countries:</strong>{" "}
            {countryDetails.borders.map((borderCountry) => {
              return <li>{getName(borderCountry.slice(0, -1))}</li>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
