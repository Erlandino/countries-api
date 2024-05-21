// imports
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

export default function Countries({ countriesData }) {
  // usestates
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  // compares countries name to input value and countries regions to region selected to decide what to display
  const countriesShow = countriesData.filter((item) => {
    // checks if a name or region has been selected. If not reveal all countries
    if ((search.toUpperCase() === "") & (region === "")) {
      return item;
    } else if (region !== "") {
      return (
        // compares name and region and reveal the related
        item.name.common.toUpperCase().includes(search.toUpperCase()) && region === item.region
      );
    } else {
      // compares only name and reveals related
      return item.name.common.toUpperCase().includes(search.toUpperCase());
    }
  });
  return (
    <section className="countries">
      <nav className="countries_nav">
        {/* search bar for countries */}
        <div className="countries_nav_searchBarContainer">
          <FontAwesomeIcon
            className="countries_nav_searchBarContainer_searchIcon"
            icon={faMagnifyingGlass}
          />
          <input
            className="countries_nav_searchBarContainer_searchbar"
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Allows the user to select a region to filter the countries by */}
        <div className="countries_nav_regionContainer">
          <select
            className="countries_nav_regionContainer_regions"
            name="regions"
            onChange={(e) => setRegion(e.target.value)}
          >
            {/* regions */}
            <option
              className="countries_nav_regionContainer_regions_region"
              selected
              disabled
              hidden
            >
              Filter by region
            </option>
            <option className="countries_nav_regionContainer_regions_region" value="Africa">
              Africa
            </option>
            <option className="countries_nav_regionContainer_regions_region" value="Americas">
              America
            </option>
            <option className="countries_nav_regionContainer_regions_region" value="Asia">
              Asia
            </option>
            <option className="countries_nav_regionContainer_regions_region" value="Europe">
              Europe
            </option>
            <option className="countries_nav_regionContainer_regions_region" value="Oceania">
              Oceania
            </option>
            <option className="countries_nav_regionContainer_regions_region" value="Antarctic">
              Antarctic
            </option>
            <option className="countries_nav_regionContainer_regions_region" value="">
              No region
            </option>
          </select>
        </div>
      </nav>
      {/* container for countries */}
      <article className="countries_container">
        {/* loops trough all countries to display and creates elements for them */}
        {countriesShow &&
          countriesShow.map((countryData) => {
            return (
              <HashLink to={countryData.cca3}>
                <div className="countries_container_country">
                  <img
                    className="countries_container_country_img"
                    src={countryData.flags.png}
                    alt=""
                    width="400"
                    height="200"
                  />
                  <div className="countries_container_country_txt">
                    <h2 className="countries_container_country_txt_name">
                      {countryData.name.official}
                    </h2>
                    <p className="countries_container_country_txt_population">
                      <strong>Population</strong>: {countryData.population}
                    </p>
                    <p className="countries_container_country_txt_region">
                      <strong>Region</strong>: {countryData.region}
                    </p>
                    <p className="countries_container_country_txt_capital">
                      <strong>Capital</strong>: {countryData.capital}
                    </p>
                  </div>
                </div>
              </HashLink>
            );
          })}
      </article>
    </section>
  );
}
