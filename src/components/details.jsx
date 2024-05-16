import React from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Details({ countriesData }) {
  const { countryCode } = useParams();

  const countryDetails = countriesData.find((filterData) => filterData.cca2 === countryCode);

  console.log(countryCode);
  console.log(countryDetails);
  let objtest = {
    name: {
      nativeName: "English",
    },
  };

  objtest = objtest["name"];
  console.log(objtest);

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
        <h1>{countryDetails.name.common}</h1>
        <p>{objectSorter(["name", "nativeName"]).common}</p>
        <p>{countryDetails.population}</p>
        <p>{countryDetails.region}</p>
        <p>{countryDetails.subregion}</p>
        <p>{countryDetails.capital[0]}</p>
        <p>{countryDetails.tld[0]}</p>
        <p>{countryDetails.currencies[0]}</p>
        <p>{countryDetails.languages[0]}</p>
      </div>
    </section>
  );
}
