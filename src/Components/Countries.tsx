import React, { useEffect, useMemo, useState } from "react";
import CountryFilter from "./CountryFilter";
import CountryList from "./CountryList";
import Pagination from "./Pagination";
import useDebouncedValue from "../hooks/useDebouncedValue";

interface Country {
  numericCode: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

const URL = "https://restcountries.com/v2/all";

const Countries: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredName, setFilteredName] = useState<string>("");
  const [filteredRegion, setFilteredRegion] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const countriesPerPage = 8;

  const fetchCountryData = async () => {
    const response = await fetch(URL);
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

  const debouncedName = useDebouncedValue(filteredName, 300);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedName, filteredRegion]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredCountries = countries.filter((country) => {
    const nameMatches = country.name
      .toLowerCase()
      .includes(debouncedName.toLowerCase());
    const regionMatches =
      filteredRegion === "" || country.region === filteredRegion;
    return nameMatches && regionMatches;
  });

  const currentCountries = useMemo(() => {
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    return filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);
  }, [currentPage, countriesPerPage, filteredCountries]);

  return (
    <>
      <CountryFilter
        filteredName={filteredName}
        filteredRegion={filteredRegion}
        handleNameChange={handleNameChange}
        handleRegionChange={handleRegionChange}
      />
      <CountryList countries={currentCountries} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={filteredCountries.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Countries;
