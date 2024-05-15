import React from "react";
import { useParams } from "react-router-dom";

export default function Details({ countriesData }) {
  const { countryCode } = useParams();

  const countryDetails = countriesData.find((filterData) => filterData.cca2 === countryCode);

  console.log(countryCode);
  console.log(countryDetails);
  return (
    <section className="details">
      <p>testing some more</p>
    </section>
  );
}
