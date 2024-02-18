import React, { useEffect, useState } from "react";
import CountryFilter from "./CountryFilter";
import CountryList from "./CountryList";
import Pagination from "./Pagination";
import _debounce from "lodash/debounce";

const debounce = _debounce;

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const countriesPerPage = 8;

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

  const debouncedHandleNameChange = debounce((value: string) => {
    setDebouncedSearchTerm(value);
  }, 300);

  useEffect(() => {
    debouncedHandleNameChange(filteredName);
  }, [filteredName]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm, filteredRegion]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredCountries = countries.filter((country) => {
    const nameMatches = country.name
      .toLowerCase()
      .includes(debouncedSearchTerm.toLowerCase());
    const regionMatches =
      filteredRegion === "" || country.region === filteredRegion;
    return nameMatches && regionMatches;
  });

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

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
