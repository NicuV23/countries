import React, { useEffect, useState } from "react";

interface Country {
  numericCode: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

const url = "https://restcountries.com/v2/all";

const Countries: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredName, setFilteredName] = useState<string>("");
  const [filteredRegion, setFilteredRegion] = useState<string>("");

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countriesData: Country[] = await response.json();
    setCountries(countriesData);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredName(e.target.value);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilteredRegion(e.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    const nameMatches = country.name
      .toLowerCase()
      .includes(filteredName.toLowerCase());
    const regionMatches =
      filteredRegion === "" || country.region === filteredRegion;
    return nameMatches && regionMatches;
  });

  return (
    <>
      <section className="filter">
        <div className="input">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for a country..."
            value={filteredName || ""}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <select
            name="select"
            id="select"
            className="select"
            value={filteredRegion || ""}
            onChange={handleRegionChange}
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>

      <div className="grid">
        {filteredCountries.map((country: Country) => {
          const { numericCode, name, population, region, capital, flag } =
            country;

          return (
            <article key={numericCode}>
              <div className="piece">
                <img className="flags" src={flag} alt={name} />
                <h2 className="name">{name}</h2>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Countries;
