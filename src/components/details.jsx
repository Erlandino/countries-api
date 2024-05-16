import React from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Details({ countriesData }) {
  const { countryCode } = useParams();

  const countryDetails = countriesData.find((filterData) => filterData.cca2 === countryCode);

  console.log(countryCode);
  console.log(countryDetails);

  const countryNativeName = () => {
    if (countryDetails) {
      const objKey = Object.keys(countryDetails.name.nativeName)[0];
      return countryDetails.name.nativeName[objKey];
    }
  };

  console.log(countryNativeName());
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
        <p>{countryNativeName().common}</p>
      </div>
    </section>
  );
}
