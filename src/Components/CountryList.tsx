import React from "react";
import CountryPiece, { Country } from "./CountryPiece";

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <div className="grid">
      {countries.map((country) => (
        <CountryPiece key={country.numericCode} {...country} />
      ))}
    </div>
  );
};

export default CountryList;
