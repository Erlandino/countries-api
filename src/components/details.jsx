import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Details({ countriesData }) {
  const { countryCode } = useParams();

  console.log(countryCode);
  console.log(countriesData);
  return (
    <section className="details">
      <p>testing some more</p>
    </section>
  );
}
