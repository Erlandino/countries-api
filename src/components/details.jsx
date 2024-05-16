import React from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Details({ countriesData }) {
  const { countryCode } = useParams();

  const countryDetails = countriesData.find((filterData) => filterData.cca2 === countryCode);

  console.log(countryCode);
  console.log(countryDetails);
  return (
    <section className="details">
      <div className="go-back-button">
        <HashLink to="/">Go back</HashLink>
      </div>
      <div className="countryDetails-container">
        <img src={countryDetails.flags.png} alt="" />
      </div>
    </section>
  );
}
