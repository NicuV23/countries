import React, { useEffect, useState } from "react";
import CountryFilter from "./CountryFilter";
import CountryList from "./CountryList";

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
      <CountryFilter
        filteredName={filteredName}
        filteredRegion={filteredRegion}
        handleNameChange={handleNameChange}
        handleRegionChange={handleRegionChange}
      />
      <CountryList countries={filteredCountries} />
    </>
  );
};

export default Countries;
